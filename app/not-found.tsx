import { T } from './components/Localized'

export default function NotFound() {
  return (
    <div className="section">
      <h2 className="section-heading">404</h2>
      <p className="intro-text">
        <T en="Oopss... Something went wrong!" pt="Opa... Algo deu errado!" />
      </p>
    </div>
  )
}
