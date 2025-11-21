'use client';

import Link from 'next/link';

export default function BackButton() {
  return (
    <Link
      href="/blog"
      style={{
        color: 'rgba(255, 255, 255, 0.6)',
        textDecoration: 'none',
        fontSize: '0.95rem',
        display: 'inline-block',
        marginBottom: '2rem',
        transition: 'color 0.2s'
      }}
      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 1)'}
      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'}
    >
      ← Back to blog
    </Link>
  );
}
