import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'app', '(public)', 'content', 'blog');

  // Read all files in the blog directory
  const files = fs.readdirSync(blogDir);

  const posts: BlogPost[] = files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter
      const { data } = matter(fileContents);

      // Extract filename without extension for the ID
      const id = filename.replace('.mdx', '');

      return {
        id,
        title: data.title || 'Untitled',
        date: data.date || '',
        readTime: data.readTime || '',
        excerpt: data.excerpt || '',
        tags: data.tags || [],
      };
    });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
