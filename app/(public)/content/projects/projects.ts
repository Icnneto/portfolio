import type { Localized } from "../../../lib/locale"

export interface ProjectBullet {
  title: Localized
  description: Localized
}

export interface Project {
  name: string
  award: Localized
  status?: Localized
  description: Localized
  bullets: ProjectBullet[]
  tech: string
  link?: string
}

export const projects: Project[] = [
  {
    name: "RBBT — Sales",
    award: { en: "Cofounder", pt: "Cofundador" },
    description: {
      en: "A multi-agent AI system that sells through conversation — qualifying customers, building carts and closing orders on WhatsApp and web chat, escalating to a human only when it should.",
      pt: "Um sistema de IA multiagente que vende pela conversa — qualifica clientes, monta carrinhos e fecha pedidos no WhatsApp e no chat do site, passando para um humano só quando deve.",
    },
    bullets: [
      {
        title: { en: "Multi-Agent Architecture", pt: "Arquitetura multiagente" },
        description: {
          en: "Four specialized agents (routing, selling, checkout, post-sale) each pinned to a least-privilege tool subset, so a failure in one never widens the blast radius of another",
          pt: "Quatro agentes especializados (roteamento, venda, checkout, pós-venda), cada um preso a um subconjunto de ferramentas de privilégio mínimo, para que a falha de um nunca amplie o raio de impacto de outro",
        },
      },
      {
        title: { en: "Platform-Agnostic Core", pt: "Núcleo agnóstico de plataforma" },
        description: {
          en: "A brand-agnostic engineering layer with pluggable commerce adapters: the same selling logic runs on Shopify and Nuvemshop without touching core",
          pt: "Uma camada de engenharia agnóstica de marca, com adaptadores de commerce plugáveis: a mesma lógica de venda roda na Shopify e na Nuvemshop sem mexer no núcleo",
        },
      },
      {
        title: { en: "Trust and Safety", pt: "Confiança e segurança" },
        description: {
          en: "Prompt-injection detection, tool-call anomaly gating and per-brand rate limits, all fail-closed to human escalation",
          pt: "Detecção de prompt injection, bloqueio de chamadas de ferramenta anômalas e limites de taxa por marca, todos com falha fechada que escala para um humano",
        },
      },
      {
        title: { en: "Evaluation as Infrastructure", pt: "Avaliação como infraestrutura" },
        description: {
          en: "Agents are scored continuously on routing accuracy, recommendation quality and checkout conversion; autonomy is earned against metrics, not assumed",
          pt: "Os agentes são avaliados continuamente em precisão de roteamento, qualidade de recomendação e conversão no checkout; a autonomia é conquistada com métricas, não presumida",
        },
      },
    ],
    tech: "Typescript - Anthropic Claude - Shopify - Nuvemshop - WhatsApp Cloud API - PostgreSQL",
    link: "https://rbbtlab.ai/sales"
  },
  {
    name: "Fomenta",
    award: { en: "Cofounder & CTO - Programa Nascer - FAPESC", pt: "Cofundador & CTO - Programa Nascer - FAPESC" },
    description: {
      en: "An end-to-end SaaS that finds public research funding for Brazilian researchers and matches it against their profile. I own the architecture from the ingestion pipeline to the payment layer.",
      pt: "Um SaaS de ponta a ponta que encontra financiamento público para pesquisadores brasileiros e o cruza com o perfil de cada um. Sou responsável pela arquitetura, do pipeline de ingestão à camada de pagamento.",
    },
    bullets: [
      {
        title: { en: "Event-Driven Ingestion", pt: "Ingestão orientada a eventos" },
        description: {
          en: "Designed a nine-Lambda pipeline fanned out over SQS that scrapes federal and state funding agencies, then runs a three-stage LLM chain to parse, validate and normalize every opportunity",
          pt: "Projetei um pipeline de nove Lambdas distribuído via SQS que coleta editais de agências de fomento federais e estaduais e roda uma cadeia de LLM em três etapas para interpretar, validar e normalizar cada oportunidade",
        },
      },
      {
        title: { en: "Failure Containment", pt: "Contenção de falhas" },
        description: {
          en: "Dead-letter queues at each stage, deduplication before extraction, and CloudWatch alarms on queue age and DLQ depth — the pipeline degrades loudly instead of dropping data silently",
          pt: "Filas de dead-letter em cada etapa, deduplicação antes da extração e alarmes no CloudWatch para a idade da fila e a profundidade da DLQ — o pipeline falha fazendo barulho em vez de perder dados em silêncio",
        },
      },
      {
        title: { en: "Semantic Matching Service", pt: "Serviço de matching semântico" },
        description: {
          en: "A separate async service ranks opportunities against a researcher's profile, cached in DynamoDB under a key stamped with the prompt version, so improving the prompt invalidates stale results on its own",
          pt: "Um serviço assíncrono separado ranqueia as oportunidades pelo perfil do pesquisador, com cache no DynamoDB sob uma chave que carrega a versão do prompt — melhorar o prompt invalida sozinho os resultados antigos",
        },
      },
      {
        title: { en: "Commercial Layer", pt: "Camada comercial" },
        description: {
          en: "Role-based access, Stripe subscriptions and payment webhooks, with per-tier usage quotas that keep LLM cost bounded per user",
          pt: "Acesso por papéis, assinaturas e webhooks de pagamento com Stripe, e cotas de uso por plano que mantêm o custo de LLM limitado por usuário",
        },
      },
    ],
    tech: "Next.js - Typescript - AWS Lambda - SQS - DynamoDB - Supabase - LangChain - Puppeteer - Stripe",
    link: "https://fomenta.com.br"
  },
  {
    name: "SwellGuide",
    award: { en: "", pt: "" },
    status: { en: "Paused", pt: "Pausado" },
    description: {
      en: "A daily mailing service that turned raw weather data into plain-language surf forecasts.",
      pt: "Um serviço de e-mail diário que transformava dados meteorológicos brutos em previsões de surf em linguagem simples.",
    },
    bullets: [
      {
        title: { en: "Product Growth", pt: "Crescimento do produto" },
        description: {
          en: "Designed, launched and grew the service to 50+ daily active users receiving automated email reports",
          pt: "Projetei, lancei e cresci o serviço até mais de 50 usuários ativos diários recebendo relatórios automáticos por e-mail",
        },
      },
      {
        title: { en: "Decoupled Architecture", pt: "Arquitetura desacoplada" },
        description: {
          en: "Built a modular system that allowed new surf spots to be added without significant code changes, making it cheap to scale coverage",
          pt: "Construí um sistema modular que permitia adicionar novos picos de surf sem grandes mudanças no código, tornando barato ampliar a cobertura",
        },
      },
      {
        title: { en: "Automation Workflow", pt: "Fluxo de automação" },
        description: {
          en: "Created an automated Node.js workflow orchestrated with LangChain to consume weather APIs, process insights via LLM, and dispatch campaigns",
          pt: "Criei um fluxo automatizado em Node.js, orquestrado com LangChain, que consome APIs de clima, processa os insights via LLM e dispara as campanhas",
        },
      },
    ],
    tech: "Node.js - LangChain - API Integrations - Tailwind CSS - Javascript - AWS",
  },
]
