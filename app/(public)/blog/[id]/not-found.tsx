'use client';

import Link from 'next/link';
import { T } from '../../../components/Localized';

export default function NotFound() {
  return (
    <div className="section">
      <h2 className="section-heading">
        <T en="Blog Post Not Found" pt="Post não encontrado" />
      </h2>
      <p className="body-text" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <T
          en="The blog post you're looking for doesn't exist or has been removed."
          pt="O post que você procura não existe ou foi removido."
        />
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
        <T en="← Back to blog" pt="← Voltar para o blog" />
      </Link>
    </div>
  );
}
