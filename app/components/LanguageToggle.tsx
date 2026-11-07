'use client'

import { useEffect, useState } from 'react'
import { HTML_LANG, LOCALE_KEY, type Locale } from '../lib/locale'

const LABEL: Record<Locale, string> = { en: 'EN', pt: 'PT' }

export function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    setLocale(document.documentElement.lang === HTML_LANG.pt ? 'pt' : 'en')
  }, [])

  const choose = (next: Locale) => {
    setLocale(next)
    document.documentElement.lang = HTML_LANG[next]
    try {
      localStorage.setItem(LOCALE_KEY, next)
    } catch {
      // No storage (private mode): the choice lasts for this page only.
    }
  }

  return (
    <div className="lang-toggle" role="group" aria-label="Language / Idioma">
      {(['en', 'pt'] as const).map((option, i) => (
        <span key={option} className="lang-toggle-item">
          {i > 0 ? <span className="lang-toggle-separator" aria-hidden="true">·</span> : null}
          <button
            type="button"
            className={`lang-toggle-option ${locale === option ? 'active' : ''}`}
            aria-pressed={locale === option}
            lang={HTML_LANG[option]}
            onClick={() => choose(option)}
          >
            {LABEL[option]}
          </button>
        </span>
      ))}
    </div>
  )
}
