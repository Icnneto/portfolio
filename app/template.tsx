import { Navigation } from './components/Navigation'
import { Stats } from './components/Stats'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Israel Nunes</h1>
        <p className="portfolio-date">Last updated: March 21st, 2026</p>
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
