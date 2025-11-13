'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/interests', label: 'interests' },
  { href: '/contact', label: 'contact' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="portfolio-nav">
      <ThemeToggle />
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`nav-link ${pathname === link.href ? 'active' : ''}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
