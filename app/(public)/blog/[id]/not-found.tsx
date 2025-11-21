'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section">
      <h2 className="section-heading">Blog Post Not Found</h2>
      <p className="body-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        The blog post you're looking for doesn't exist or has been removed.
      </p>
      <Link
        href="/blog"
        style={{
          color: 'rgba(255, 255, 255, 0.8)',
          textDecoration: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
          paddingBottom: '2px',
          transition: 'border-color 0.2s'
        }}
        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 1)'}
        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.8)'}
      >
        ← Back to blog
      </Link>
    </div>
  );
}
