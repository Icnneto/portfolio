import { Navigation } from './components/Navigation'
import { Stats } from './components/Stats'
import { T } from './components/Localized'

function formatLastUpdated(iso: string): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).formatToParts(new Date(iso))

  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const day = Number(part('day'))
  const suffix =
    day % 10 === 1 && day !== 11 ? 'st'
      : day % 10 === 2 && day !== 12 ? 'nd'
        : day % 10 === 3 && day !== 13 ? 'rd'
          : 'th'

  return `${part('month')} ${day}${suffix}, ${part('year')}`
}

/** "7 de novembro de 2026", the way a Brazilian reader writes a date. */
function formatLastUpdatedPt(iso: string): string {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso))
}

const lastUpdatedIso = process.env.LAST_UPDATED ?? new Date().toISOString()
const lastUpdated = formatLastUpdated(lastUpdatedIso)
const lastUpdatedPt = formatLastUpdatedPt(lastUpdatedIso)

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Israel Nunes</h1>
        <p className="portfolio-date">
          <T en={`Last updated: ${lastUpdated}`} pt={`Atualizado em ${lastUpdatedPt}`} />
        </p>
      </header>

      <Navigation />

      <main className="portfolio-content">
        {children}
      </main>

      <footer className="portfolio-footer">
        <Stats />
      </footer>
    </div>
  )
}
