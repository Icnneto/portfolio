export default function HomePage() {
  return (
    <div className="section">
      <p className="intro-text">
        Hello, I'm Israel Nunes — a Full Stack Engineer building AI products and multi-agent systems.
      </p>

      <p className="body-text">
        I'm cofounder of RBBT, where we build multi-agent systems that run real operations, and of Fomenta, an AI-powered platform that helps researchers find and access funding.
      </p>

      <p className="body-text">
        Most of my work lives where the AI layer meets production: data pipelines, orchestration, guardrails, and the unglamorous parts that decide whether a system holds up outside a demo.
      </p>

      <p className="body-text">
        I build end-to-end — from the interface to the infrastructure — and I like problems where the hard part isn't the model, it's everything around it.
      </p>

      <div className="highlight-section">
        <h2 className="section-heading">Now</h2>
        <p className="body-text">
          Building agent systems at RBBT and scaling Fomenta. Interested in how autonomous agents earn trust: <span className="font-semibold">observability, boundaries, and knowing when a machine should hand the decision back to a person.</span>
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
