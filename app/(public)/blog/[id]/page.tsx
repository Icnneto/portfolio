import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BackButton from './BackButton';

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getBlogPost(id: string) {
  const blogDir = path.join(process.cwd(), 'app', '(public)', 'content', 'blog');
  const filePath = path.join(blogDir, `${id}.mdx`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: {
      title: data.title || 'Untitled',
      date: data.date || '',
      readTime: data.readTime || '',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
    },
    content,
  };
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app', '(public)', 'content', 'blog');

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);

  return files
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      id: filename.replace('.mdx', ''),
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="section">
      <BackButton />

      <article style={{ maxWidth: '900px' }}>
        {/* Post metadata */}
        <div style={{
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          <h1 style={{
            fontSize: '2rem',
            marginBottom: '0.5rem',
            fontWeight: '400',
            lineHeight: '1.2'
          }}>
            {post.frontmatter.title}
          </h1>
          <div style={{
            display: 'flex',
            gap: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.95rem'
          }}>
            <span>{post.frontmatter.date}</span>
            <span>·</span>
            <span>{post.frontmatter.readTime}</span>
          </div>

          {post.frontmatter.tags.length > 0 && (
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              marginTop: '0.75rem',
              flexWrap: 'wrap'
            }}>
              {post.frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'var(--color-gray-200)',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Blog post content */}
        <div className="blog-content">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </div>
  );
}
