export interface ProjectBullet {
  title: string
  description: string
}

export interface Project {
  name: string
  award: string
  description: string
  bullets: ProjectBullet[]
  tech: string
  link: string
}

export const projects: Project[] = [
  {
    name: "Fomenta",
    award: "Programa Nascer - FAPESC",
    description: "An end-to-end SaaS platform for researchers to discover and access funding opportunities through AI-powered recommendations.",
    bullets: [
      { title: "Scalable Data Infrastructure", description: "Engineered a scraping pipeline monitoring 45+ funding institutions, orchestrating LLMs to extract and validate data from HTML and PDF sources" },
      { title: "AI Engineering", description: "Implemented a secure LangChain pipeline with guardrails and rate limiting to ensure reliability and cost control" },
      { title: "Production Features", description: "Built role-based access control, Stripe subscription management, and real-time payment webhooks, ensuring a complete commercial lifecycle" },
    ],
    tech: "Next.js, Typescript, Node.js, Puppeteer, LangChain, LlamaParse, AWS (SAM, Lambda, SQS, EventBridge)",
    link: "https://fomenta.com.br"
  },
  {
    name: "SwellGuide",
    award: "",
    description: "A daily mailing service transforming complex weather data into natural language surf forecasts",
    bullets: [
      { title: "Product Growth", description: "Designed, launched, and grew the service to 50+ daily active users receiving automated email reports" },
      { title: "Decoupled Architecture", description: "Built a modular system allowing for the rapid addition of new surf spots without significant code changes, facilitating easy scaling" },
      { title: "Automation Workflow", description: "Created an automated Node.js workflow orchestrated with LangChain to consume weather APIs, process insights via LLM, and dispatch campaigns" },
    ],
    tech: "Node.js, LangChain, API Integrations, Tailwind CSS, Javascript, AWS (SAM, Lambda, SQS, EventBridge)",
    link: "https://swellguide.com.br"
  },
  {
    name: "Icarus Solar Agent",
    award: "",
    description: "Smart conversational agent designed to help homeowners evaluate solar energy investments",
    bullets: [
      { title: "Architecture", description: "Implemented a streaming chat interface using Vercel AI SDK and function calling to orchestrate tools sequentially" },
      { title: "Integrations", description: "Integrated Google Solar API to retrieve real-time geospatial data for accurate ROI and CO2 offset calculations" },
    ],
    tech: "Next.js, Vercel AI SDK, OpenAI, Typescript, Tailwind",
    link: "https://solar-panel-agent.vercel.app/"
  },
]
