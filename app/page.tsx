import { T } from './components/Localized'

export default function HomePage() {
  return (
    <div className="section">
      <p className="intro-text">
        <T
          en="Hello, I'm Israel Nunes — a Full Stack Engineer building AI products and multi-agent systems."
          pt="Olá, eu sou o Israel Nunes — engenheiro Full Stack construindo produtos de IA e sistemas multiagentes."
        />
      </p>

      <p className="body-text">
        <T
          en="I'm cofounder of RBBT, where we build multi-agent systems that run real operations, and of Fomenta, an AI-powered platform that helps researchers find and access funding."
          pt="Sou cofundador da RBBT, onde construímos sistemas multiagentes que rodam operações reais, e da Fomenta, uma plataforma com IA que ajuda pesquisadores a encontrar e acessar financiamento."
        />
      </p>

      <p className="body-text">
        <T
          en="Most of my work lives where the AI layer meets production: data pipelines, orchestration, guardrails, and the unglamorous parts that decide whether a system holds up outside a demo."
          pt="A maior parte do meu trabalho acontece onde a camada de IA encontra a produção: pipelines de dados, orquestração, guardrails e as partes nada glamorosas que decidem se um sistema se sustenta fora de uma demo."
        />
      </p>

      <p className="body-text">
        <T
          en="I build end-to-end — from the interface to the infrastructure — and I like problems where the hard part isn't the model, it's everything around it."
          pt="Construo de ponta a ponta — da interface à infraestrutura — e gosto de problemas em que a parte difícil não é o modelo, e sim tudo o que está em volta dele."
        />
      </p>

      <div className="highlight-section">
        <h2 className="section-heading">
          <T en="Now" pt="Agora" />
        </h2>
        <p className="body-text">
          <T
            en={
              <>
                Building agent systems at RBBT and scaling Fomenta. Interested in how autonomous agents earn trust: <span className="font-semibold">observability, boundaries, and knowing when a machine should hand the decision back to a person.</span>
              </>
            }
            pt={
              <>
                Construindo sistemas de agentes na RBBT e escalando a Fomenta. Interessado em como agentes autônomos conquistam confiança: <span className="font-semibold">observabilidade, limites e saber quando uma máquina deve devolver a decisão a uma pessoa.</span>
              </>
            }
          />
        </p>
      </div>

      <div className="link-section">
        <a href="https://github.com/Icnneto" target="_blank" rel="noopener noreferrer" className="text-link">
          github
        </a>
        <span className="link-separator">·</span>
        <a href="https://www.linkedin.com/in/icnneto/" target="_blank" rel="noopener noreferrer" className="text-link">
          linkedin
        </a>
        <span className="link-separator">·</span>
        <a href="mailto:israelnetonunes@gmail.com" className="text-link">
          email
        </a>
      </div>
    </div>
  )
}
