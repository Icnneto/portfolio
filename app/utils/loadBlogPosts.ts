import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPostMeta {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export interface BlogPost extends BlogPostMeta {
  id: string;
  tags: string[];
  /** The Brazilian Portuguese edition's metadata, when `<id>.pt.mdx` exists next to the post. */
  pt?: BlogPostMeta;
}

export const BLOG_DIR = path.join(process.cwd(), 'app', '(public)', 'content', 'blog');

/** A post's Portuguese edition lives next to it as `<id>.pt.mdx`; it is never a post of its own. */
export const isTranslation = (filename: string) => filename.endsWith('.pt.mdx');

function metaOf(data: Record<string, unknown>): BlogPostMeta {
  return {
    title: (data.title as string) || 'Untitled',
    date: (data.date as string) || '',
    readTime: (data.readTime as string) || '',
    excerpt: (data.excerpt as string) || '',
  };
}

export async function loadBlogPosts(): Promise<BlogPost[]> {
  const blogDir = BLOG_DIR;

  // Read all files in the blog directory
  const files = fs.readdirSync(blogDir);

  const posts: BlogPost[] = files
    .filter((filename) => filename.endsWith('.mdx') && !isTranslation(filename))
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');

      // Parse frontmatter
      const { data } = matter(fileContents);

      // Extract filename without extension for the ID
      const id = filename.replace('.mdx', '');

      const ptPath = path.join(blogDir, `${id}.pt.mdx`);
      const pt = fs.existsSync(ptPath) ? metaOf(matter(fs.readFileSync(ptPath, 'utf8')).data) : undefined;

      return {
        id,
        ...metaOf(data),
        tags: data.tags || [],
        ...(pt ? { pt } : {}),
      };
    });

  // Sort by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
