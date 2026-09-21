import { Navigation } from './components/Navigation'
import { Stats } from './components/Stats'

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

const lastUpdated = formatLastUpdated(process.env.LAST_UPDATED ?? new Date().toISOString())

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Israel Nunes</h1>
        <p className="portfolio-date">Last updated: {lastUpdated}</p>
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
