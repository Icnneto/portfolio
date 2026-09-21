export interface ProjectBullet {
  title: string
  description: string
}

export interface Project {
  name: string
  award: string
  status?: string
  description: string
  bullets: ProjectBullet[]
  tech: string
  link?: string
}

export const projects: Project[] = [
  {
    name: "RBBT — Sales",
    award: "Cofounder",
    description: "A multi-agent AI system that sells through conversation — qualifying customers, building carts and closing orders on WhatsApp and web chat, escalating to a human only when it should.",
    bullets: [
      { title: "Multi-Agent Architecture", description: "Four specialized agents (routing, selling, checkout, post-sale) each pinned to a least-privilege tool subset, so a failure in one never widens the blast radius of another" },
      { title: "Platform-Agnostic Core", description: "A brand-agnostic engineering layer with pluggable commerce adapters: the same selling logic runs on Shopify and Nuvemshop without touching core" },
      { title: "Trust and Safety", description: "Prompt-injection detection, tool-call anomaly gating and per-brand rate limits, all fail-closed to human escalation" },
      { title: "Evaluation as Infrastructure", description: "Agents are scored continuously on routing accuracy, recommendation quality and checkout conversion; autonomy is earned against metrics, not assumed" },
    ],
    tech: "Typescript - Anthropic Claude - Shopify - Nuvemshop - WhatsApp Cloud API - PostgreSQL",
    link: "https://rbbtlab.ai/sales"
  },
  {
    name: "Fomenta",
    award: "Cofounder & CTO - Programa Nascer - FAPESC",
    description: "An end-to-end SaaS that finds public research funding for Brazilian researchers and matches it against their profile. I own the architecture from the ingestion pipeline to the payment layer.",
    bullets: [
      { title: "Event-Driven Ingestion", description: "Designed a nine-Lambda pipeline fanned out over SQS that scrapes federal and state funding agencies, then runs a three-stage LLM chain to parse, validate and normalize every opportunity" },
      { title: "Failure Containment", description: "Dead-letter queues at each stage, deduplication before extraction, and CloudWatch alarms on queue age and DLQ depth — the pipeline degrades loudly instead of dropping data silently" },
      { title: "Semantic Matching Service", description: "A separate async service ranks opportunities against a researcher's profile, cached in DynamoDB under a key stamped with the prompt version, so improving the prompt invalidates stale results on its own" },
      { title: "Commercial Layer", description: "Role-based access, Stripe subscriptions and payment webhooks, with per-tier usage quotas that keep LLM cost bounded per user" },
    ],
    tech: "Next.js - Typescript - AWS Lambda - SQS - DynamoDB - Supabase - LangChain - Puppeteer - Stripe",
    link: "https://fomenta.com.br"
  },
  {
    name: "SwellGuide",
    award: "",
    status: "Paused",
    description: "A daily mailing service that turned raw weather data into plain-language surf forecasts.",
    bullets: [
      { title: "Product Growth", description: "Designed, launched and grew the service to 50+ daily active users receiving automated email reports" },
      { title: "Decoupled Architecture", description: "Built a modular system that allowed new surf spots to be added without significant code changes, making it cheap to scale coverage" },
      { title: "Automation Workflow", description: "Created an automated Node.js workflow orchestrated with LangChain to consume weather APIs, process insights via LLM, and dispatch campaigns" },
    ],
    tech: "Node.js - LangChain - API Integrations - Tailwind CSS - Javascript - AWS",
  },
]
