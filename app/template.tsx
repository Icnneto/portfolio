import { Navigation } from './components/Navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Israel Nunes</h1>
        <p className="portfolio-date">Last updated: November 13, 2025</p>
      </header>

      <Navigation />

      <main className="portfolio-content">
        {children}
      </main>

      <footer className="portfolio-footer">
        {/* Stats component will go here later */}
      </footer>
    </div>
  )
}
