'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { T } from './Localized'

const links = [
  { href: '/', en: 'home', pt: 'início' },
  { href: '/projects', en: 'projects', pt: 'projetos' },
  { href: '/blog', en: 'blog', pt: 'blog' },
  { href: '/contact', en: 'contact', pt: 'contato' },
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
          <T en={link.en} pt={link.pt} />
        </Link>
      ))}
      <LanguageToggle />
    </nav>
  )
}
