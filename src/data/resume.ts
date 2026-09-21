export const profile = {
  name: "Shuja Ali Sattar",
  role: "Full-Stack Engineer",
  headline: "Full-Stack Engineer | AI Automation & AI Agents",
  tagline:
    "I build production SaaS and CRM applications, AI agents, voice-driven automation, and workflow-based systems using React, Next.js, TypeScript, Node.js, Python, and PostgreSQL.",
  location: "Lahore, Pakistan",
  phone: "+92 317 0986975",
  email: "shujaalisattar@gmail.com",
  github: "https://github.com/ShujaAliSattar01",
  linkedin: "https://www.linkedin.com/in/shuja-ali-sattar/",
  /** Public path to the general Full-Stack / AI Automation CV. Leave undefined to hide the button. */
  cvUrl: undefined as string | undefined,
  summary: [
    "Full-Stack Engineer with hands-on experience building production SaaS and CRM applications, along with practical AI automation and agent-based projects.",
    "My professional development work includes React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, REST APIs, CRM workflows, role-based access, multi-tenant systems, real-time communication, third-party integrations, and production debugging.",
    "Alongside full-stack development, I build Python-based AI and automation systems involving LLM-driven agents, voice and speech-to-text workflows, browser and desktop automation, data extraction, web scraping, structured data processing, and API integrations.",
    "I’m especially interested in building products where Full-Stack Engineering, AI Agents, Automation, APIs, and real business workflows come together.",
  ],
};

export const seo = {
  title: "Shuja Ali Sattar | Full-Stack Engineer & AI Automation",
  description:
    "Full-Stack Engineer building SaaS and CRM products, AI agents, voice automation, Python workflows, and scalable web applications using React, Next.js, Node.js, Python, and PostgreSQL.",
  keywords: [
    "Full Stack Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "AI Automation Engineer",
    "AI Agent Developer",
    "Python Automation",
    "SaaS Developer",
    "CRM Developer",
    "Lahore Software Engineer",
  ],
};

export const skillGroups = [
  {
    title: "Full-Stack Development",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "SCSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      "REST APIs",
      "PostgreSQL",
      "Prisma",
      "SQL",
      "Authentication",
      "Session Management",
      "API Integration",
      "Data Modeling",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "Python",
      "AI Agents",
      "LLM APIs",
      "Groq",
      "Whisper / Speech-to-Text",
      "Voice AI",
      "Browser Automation",
      "Playwright",
      "PyAutoGUI",
      "PyWin32",
      "Workflow Automation",
      "Web Scraping",
      "Data Extraction",
      "Prompt / System Design",
      "Tool-Based Agent Actions",
    ],
  },
  {
    title: "Architecture & Product",
    skills: [
      "SaaS",
      "CRM Systems",
      "Multi-Tenancy",
      "RBAC",
      "Permission-Aware Workflows",
      "WebRTC",
      "Socket.IO",
      "Real-Time Communication",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "AWS EC2",
      "PM2",
      "Linux",
      "Cursor",
      "AI-Assisted Development",
      "Production Debugging",
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack Engineer",
    company: "Hatzs Dimensions",
    period: "Mar 2025 - Present",
    location: "Lahore, Pakistan",
    points: [
      "Deliver production features across frontend and backend layers of SaaS and CRM applications, working with React, Next.js, TypeScript, Node.js, NestJS, REST APIs, and PostgreSQL.",
      "Build complex product workflows including dashboards, forms, calendars, timelines, Kanban/list views, scheduling, communication, and multi-step business processes.",
      "Implement integration- and workflow-driven features such as eSign flows, email-building interfaces, and communication tooling, connecting third-party APIs to backend business processes.",
      "Integrate and troubleshoot frontend-to-backend API flows, resolving issues involving validation, permissions, data consistency, request/response contracts, and data scoping.",
      "Develop and improve real-time communication features using WebRTC and Socket.IO, including reconnection, connection recovery, ICE restart, and re-offer handling.",
      "Implement role-based and permission-aware workflows across multiple product portals, ensuring users see and interact with functionality according to their roles and access levels.",
      "Investigate production issues across the UI, API, and data layers, identify root causes, and deliver focused fixes through Git-based code review and release workflows.",
    ],
    exposure: "Product exposure: DealerIQ, BrokerOS, Social Hub / SocialBearAI, Befer, and other SaaS products across multiple business domains.",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  /** Short category badges shown next to the subtitle (e.g. "AI Agent", "Automation"). */
  tags?: string[];
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Shiny",
    subtitle: "AI Voice & Windows Computer Agent",
    tags: ["AI Agent", "Voice AI", "Automation"],
    description:
      "A Python-based AI computer assistant that understands natural Roman Urdu and English voice or text instructions and converts them into browser and desktop actions. It combines LLM-driven decision making and speech-to-text with Chrome, YouTube, and WhatsApp Web automation, application control, file/folder actions, and keyboard/mouse control on Windows, executed as structured tool actions with confirmation for sensitive steps and failure/retry handling. A personal AI/automation project.",
    stack: [
      "Python",
      "Groq",
      "Groq Whisper",
      "Playwright",
      "PyAutoGUI",
      "PyWin32",
      "Edge TTS",
      "LLM APIs",
      "JSON Tool Actions",
    ],
    image: "/shiny-ai-agent.png",
  },
  {
    name: "Lead Intelligence & Outreach Automation",
    subtitle: "Lead Scraper & Outreach Automation",
    tags: ["Automation", "Web Scraping", "Data"],
    description:
      "A Python automation system that collects local business leads from Google Maps using configurable country, city, and business queries, extracting business names, websites, emails, and phone numbers. It cleans and de-duplicates records into a master Excel/CSV dataset, inspects websites and detects their technology, tracks lead status, and supports personalized WhatsApp and email-oriented outreach with sent tracking and reports.",
    stack: [
      "Python",
      "Playwright",
      "Pandas",
      "Excel / CSV",
      "Web Scraping",
      "Browser Automation",
      "Data Processing",
    ],
    image: "/lead-outreach-automation.png",
  },
  {
    name: "DealerIQ",
    subtitle: "Automotive CRM / Dealership SaaS",
    tags: ["SaaS", "CRM"],
    description:
      "Production automotive CRM / SaaS platform covering lead and deal management, customer workflows, scheduling, calendars, ticketing, communication, reporting, eSign workflows, and post-purchase functionality. Worked across permission-aware interfaces, workflow-driven business processes, API integration, responsive portals, real-time/video features, and production debugging.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "TanStack Query", "WebRTC", "Socket.IO"],
    image: "/dealeriq.png",
  },
  {
    name: "BrokerOS",
    subtitle: "Insurance CRM / Workflow Platform",
    tags: ["SaaS", "CRM"],
    description:
      "Insurance-focused CRM and workflow platform with API-driven business processes, structured customer workflows, and permission-aware functionality. Contributed reusable interfaces, responsive UI, business process screens, and integration-focused features.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs"],
    image: "/brokeros.png",
  },
  {
    name: "Social Hub / SocialBearAI",
    subtitle: "Social CRM & AI-Enabled SaaS",
    tags: ["SaaS", "AI-Enabled"],
    description:
      "Social-media and communication product covering content workflows, email-building interfaces, communication features, and AI-enabled product workflows. Contributed reusable frontend experiences, responsive workflows, and API integrations.",
    stack: ["React", "Next.js", "TypeScript", "API Integration", "Stripo"],
    image: "/socialhub.png",
  },
  {
    name: "Befer",
    subtitle: "CRM / Business Workflow Platform",
    tags: ["CRM"],
    description:
      "CRM and business workflow platform covering customer-facing processes and structured business workflows. Worked on reusable UI, API-driven functionality, responsive application behavior, and integration-oriented features.",
    stack: ["React", "Next.js", "TypeScript", "API Integration"],
    image: "/befer.png",
  },
  {
    name: "HRMS",
    subtitle: "Multi-Tenant SaaS",
    tags: ["SaaS", "Independent Project"],
    description:
      "Independent multi-tenant HR SaaS foundation built as a modular monolith. Implemented authentication and session management, tenant isolation, memberships, role-based permissions, and protected API workflows on PostgreSQL and Prisma to demonstrate scalable, production-oriented backend architecture.",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "RBAC", "Multi-Tenancy"],
    image: "/hrms.png",
  },
];

export const additionalExposure = [
  {
    title: "AI Agents & Automation",
    detail:
      "Independent Python projects: LLM-driven agent actions with Groq, Whisper speech-to-text, Playwright and PyAutoGUI automation, Google Maps lead scraping, and Pandas-based data pipelines.",
  },
  {
    title: "AWS / Deployment",
    detail:
      "Hands-on EC2 Ubuntu setup for a Node.js/Express API, PM2 process management, security-group troubleshooting, and server-side runtime setup.",
  },
  {
    title: "Backend Systems",
    detail:
      "Built and tested session-backed authentication and protected API flows in NestJS with PostgreSQL, including login, current-user access, tenant context, and permission-aware behavior.",
  },
  {
    title: "Quality Workflow",
    detail:
      "Practical experience with linting, type checking, unit/e2e test cycles, debugging API contracts, and validating fixes before release.",
  },
];

export const education = [
  {
    degree: "BS Computer Science",
    school: "Virtual University of Pakistan",
    period: "Apr 2023 - Present",
    location: "Lahore, Pakistan",
    detail: "Focus: software engineering, web development, databases, networking, and applied computing.",
  },
  {
    degree: "Intermediate in Computer Science (ICS)",
    school: "Fauji Foundation College",
    period: "",
    location: "Lahore Cantt, Pakistan",
    detail: "",
  },
];

export const languages = ["English", "Urdu", "Punjabi"];
