'use client';

import Link from 'next/link';
import { BlogPost } from '../../utils/loadBlogPosts';

interface BlogPostItemProps {
  post: BlogPost;
}

export default function BlogPostItem({ post }: BlogPostItemProps) {
  return (
    <div className="blog-item">
      <div className="blog-header">
        <Link href={`/blog/${post.id}`} className="text-link">
          <h3 className="blog-title">{post.title}</h3>
        </Link>
        <p className="blog-meta">{post.date}</p>
      </div>
      <p className="body-text">{post.excerpt}</p>
    </div>
  );
}
