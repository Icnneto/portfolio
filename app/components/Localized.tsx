import type { ReactNode } from 'react'

// Both languages are rendered; CSS hides the one the <html lang> does not name. The wrappers are `display: contents`,
// so they add no box and no spacing of their own.

/** Inline text in both languages — inside a heading, a link, a paragraph. */
export function T({ en, pt }: { en: ReactNode; pt: ReactNode }) {
  return (
    <>
      <span className="l10n" data-locale="en" lang="en">{en}</span>
      <span className="l10n" data-locale="pt" lang="pt-BR">{pt}</span>
    </>
  )
}

/** Block content in both languages — paragraphs, sections, a whole article. */
export function TBlock({ en, pt }: { en: ReactNode; pt: ReactNode }) {
  return (
    <>
      <div className="l10n" data-locale="en" lang="en">{en}</div>
      <div className="l10n" data-locale="pt" lang="pt-BR">{pt}</div>
    </>
  )
}
