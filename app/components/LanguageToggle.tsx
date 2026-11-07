'use client'

import { useEffect, useState } from 'react'
import { HTML_LANG, LOCALE_KEY, type Locale } from '../lib/locale'

/**
 * A pill switch: EN on the left, PT on the right, the thumb under the language in use. Where the thumb sits is CSS,
 * read from the <html lang> the boot script set before paint (globals.css, "Language"), so the switch never flashes
 * the wrong side while the page hydrates.
 */
export function LanguageToggle() {
  const [isPt, setIsPt] = useState(false)

  useEffect(() => {
    setIsPt(document.documentElement.lang === HTML_LANG.pt)
  }, [])

  const toggle = () => {
    const next: Locale = document.documentElement.lang === HTML_LANG.pt ? 'en' : 'pt'
    document.documentElement.lang = HTML_LANG[next]
    try {
      localStorage.setItem(LOCALE_KEY, next)
    } catch {
      // No storage (private mode): the choice lasts for this page only.
    }
    setIsPt(next === 'pt')
  }

  return (
    <button type="button" role="switch" aria-checked={isPt} aria-label="Português" className="lang-switch" onClick={toggle}>
      <span className="lang-switch-thumb" aria-hidden="true" />
      <span className="lang-switch-label" data-label="en" aria-hidden="true">EN</span>
      <span className="lang-switch-label" data-label="pt" aria-hidden="true">PT</span>
    </button>
  )
}
