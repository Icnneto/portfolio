// The site speaks English and Brazilian Portuguese. Every page is static and carries both languages; the <html lang>
// attribute, set before the first paint (layout.tsx), decides which one is shown (globals.css, "Language"). That keeps
// the site fully static, the switch instant and the URLs unchanged — the same pattern as the theme.

export type Locale = 'en' | 'pt'

export const HTML_LANG: Record<Locale, string> = { en: 'en', pt: 'pt-BR' }

export const LOCALE_KEY = 'lang'

export type Localized<T = string> = Record<Locale, T>

/**
 * Runs before the first paint: English unless the visitor picked Portuguese with the toggle. The browser's language is
 * not consulted. Kept in sync with LOCALE_KEY and HTML_LANG.
 */
export const LOCALE_BOOT_SCRIPT = `
  ;(function() {
    try {
      document.documentElement.lang = localStorage.getItem('lang') === 'pt' ? 'pt-BR' : 'en';
    } catch (e) {}
  })()
`
