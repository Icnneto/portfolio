'use client';

import Link from 'next/link';
import { BlogPost } from '../../utils/loadBlogPosts';
import { T } from '../../components/Localized';

interface BlogPostItemProps {
  post: BlogPost;
}

export default function BlogPostItem({ post }: BlogPostItemProps) {
  const pt = post.pt ?? post;
  return (
    <div className="blog-item">
      <div className="blog-header">
        <Link href={`/blog/${post.id}`} className="text-link">
          <h3 className="blog-title">
            <T en={post.title} pt={pt.title} />
          </h3>
        </Link>
        <p className="blog-meta">
          <T en={post.date} pt={pt.date} />
        </p>
      </div>
      <p className="body-text">
        <T en={post.excerpt} pt={pt.excerpt} />
      </p>
    </div>
  );
}
