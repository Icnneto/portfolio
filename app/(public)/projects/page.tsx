export default function ProjectsPage() {
  const projects = [
    {
      name: "Fomenta",
      award: "Programa Nascer - FAPESC",
      description: "An end-to-end SaaS platform for researchers to discover and access funding opportunities through AI-powered recommendations. As the sole full-stack developer, I architected and implemented both the data infrastructure and user-facing application. The backend leverages Puppeteer for automated web scraping, orchestrating a sophisticated LangChain pipeline where LLMs extract and validate data from HTML, while a second model summarizes grant PDFs (converted via LlamaParse). This feeds a scalable AWS microservices architecture deployed via SAM. The frontend is a production-ready Next.js 14+ application with App Router, featuring Stripe subscription management, Supabase authentication, and personalized AI recommendations powered by OpenAI/Gemini APIs. The platform implements layered architecture with clear separation of concerns, role-based access control (newsletter/premium/enterprise tiers), real-time payment webhooks, and is deployed on Cloudflare Pages with Edge Functions for global performance. Technologies include TypeScript, Tailwind CSS, PostgreSQL, and comprehensive type-safe data flows across the entire stack.",
      tech: "Next.js, Typescript, Node.js, Puppeteer, LangChain, LlamaParse, AWS (SAM, Lambda, SQS, EventBridge)",
      link: "https://fomenta.com.br"
    },
    {
      name: "SwellGuide",
      award: "",
      description: "An innovative solution that translates the complexity of weather forecasts into a daily newsletter with sea condition analysis in natural language. As the creator and sole developer, I implemented an automated workflow in Python, orchestrated with LangChain, to consume data from weather APIs, process this information through an LLM to generate insights, and manage the sending of email campaigns. I was responsible for the entire project lifecycle, from system architecture and back-end/front-end development to infrastructure setup and integrations",
      tech: "Node.js, LangChain, API Integrations, Tailwind CSS, Javascript, AWS (SAM, Lambda, SQS, EventBridge)",
      link: "https://swellguide.com.br"
    }
  ]

  return (
    <div className="section">
      <h2 className="section-heading">Selected Work</h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">{project.name}</h3>
            {project.award && <p className="project-tech">{project.award}</p>}
            <p className="body-text">{project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">
              view project →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
