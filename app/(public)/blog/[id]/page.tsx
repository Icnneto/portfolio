import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import BackButton from './BackButton';
import { T, TBlock } from '../../../components/Localized';
import { isTranslation } from '../../../utils/loadBlogPosts';

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

  // The Brazilian Portuguese edition, when there is one, lives next to the post as <id>.pt.mdx.
  const ptPath = path.join(blogDir, `${id}.pt.mdx`);
  const ptFile = fs.existsSync(ptPath) ? matter(fs.readFileSync(ptPath, 'utf8')) : null;

  return {
    frontmatter: {
      title: data.title || 'Untitled',
      date: data.date || '',
      readTime: data.readTime || '',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
    },
    content,
    pt: ptFile
      ? {
          title: ptFile.data.title || data.title || 'Untitled',
          date: ptFile.data.date || data.date || '',
          readTime: ptFile.data.readTime || data.readTime || '',
          content: ptFile.content,
        }
      : null,
  };
}

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'app', '(public)', 'content', 'blog');

  if (!fs.existsSync(blogDir)) {
    return [];
  }

  const files = fs.readdirSync(blogDir);

  return files
    .filter((filename) => filename.endsWith('.mdx') && !isTranslation(filename))
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
            <T en={post.frontmatter.title} pt={post.pt?.title ?? post.frontmatter.title} />
          </h1>
          <div style={{
            display: 'flex',
            gap: '1rem',
            color: 'var(--text-muted)',
            fontSize: '0.95rem'
          }}>
            <span><T en={post.frontmatter.date} pt={post.pt?.date ?? post.frontmatter.date} /></span>
            <span>·</span>
            <span><T en={post.frontmatter.readTime} pt={post.pt?.readTime ?? post.frontmatter.readTime} /></span>
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
          <TBlock
            en={<MDXRemote source={post.content} />}
            pt={
              post.pt ? (
                <MDXRemote source={post.pt.content} />
              ) : (
                <>
                  <p><em>Este post está disponível apenas em inglês.</em></p>
                  <MDXRemote source={post.content} />
                </>
              )
            }
          />
        </div>
      </article>
    </div>
  );
}
