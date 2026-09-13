export const profile = {
  name: "Shuja Ali Sattar",
  role: "Full-Stack Engineer",
  tagline: "React.js • Next.js • TypeScript • Node.js • NestJS • PostgreSQL",
  location: "Lahore, Pakistan",
  phone: "+92 317 0986975",
  email: "shujaalisattar@gmail.com",
  github: "https://github.com/ShujaAliSattar01",
  linkedin: "https://www.linkedin.com/in/shuja-ali-sattar/",
  summary:
    "Full-Stack Engineer with hands-on experience building and maintaining production SaaS applications using React, Next.js, TypeScript, Node.js, and NestJS. Experienced across frontend development, REST APIs, authentication, permissions, PostgreSQL, real-time communication, third-party integrations, and production debugging. Strong at translating complex product requirements into reliable, responsive features and tracing issues across the frontend, backend, and data layers.",
};

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
      "TanStack Query",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "Authentication",
      "Session Management",
      "API Integration",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Prisma", "SQL", "Data Modeling"],
  },
  {
    title: "Architecture & Product",
    skills: [
      "Full-Stack SaaS Development",
      "Multi-Tenancy",
      "RBAC",
      "Permission-Aware Workflows",
      "State Management",
    ],
  },
  {
    title: "Real-Time",
    skills: [
      "WebRTC",
      "Socket.IO",
      "Real-Time Communication",
      "Reconnection & Recovery",
    ],
  },
  {
    title: "Tools & Deployment",
    skills: ["Git", "GitHub", "Postman", "AWS EC2", "PM2", "Linux", "Production Debugging"],
  },
];

export const experience = [
  {
    role: "Full-Stack Engineer",
    company: "Hatzs Dimensions",
    period: "Mar 2025 - Present",
    location: "Lahore, Pakistan",
    points: [
      "Deliver production features across frontend and backend layers of SaaS applications, working with React, Next.js, TypeScript, Node.js, NestJS, REST APIs, and PostgreSQL.",
      "Build complex product workflows including dashboards, forms, calendars, timelines, Kanban/list views, scheduling, communication, and multi-step business processes.",
      "Integrate and troubleshoot frontend-to-backend API flows, resolving issues involving validation, permissions, data consistency, request/response contracts, and data scoping.",
      "Develop and improve real-time communication features using WebRTC and Socket.IO, including reconnection, connection recovery, ICE restart, and re-offer handling.",
      "Implement role-based and permission-aware workflows across multiple product portals, ensuring users see and interact with functionality according to their roles and access levels.",
      "Investigate production issues across the UI, API, and data layers, identify root causes, and deliver focused fixes through Git-based code review and release workflows.",
    ],
    exposure: "Product exposure: DealerIQ, BrokerOS, Social Hub / SocialBearAI, and other SaaS products across multiple business domains.",
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    name: "DealerIQ",
    subtitle: "Automotive SaaS",
    description:
      "Contributed to production SaaS workflows across lead and deal management, scheduling, calendars, ticketing, eSign workflows, customer communication, reporting, post-purchase portals, and real-time/video functionality. Worked across complex UI flows, API integration, permissions, responsive portals, and production debugging while maintaining client-sensitive business logic confidentiality.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs", "TanStack Query", "WebRTC", "Socket.IO"],
    image: "/dealeriq.png",
  },
  {
    name: "Befer Broker",
    subtitle: "Broker & Service Business Platform",
    description:
      "Broker and service-business platform covering customers, jobs, scheduling, invoices, payments, and reporting from a single dashboard.",
    stack: [],
    image: "/befer.png",
  },
  {
    name: "Social Hub / SocialBearAI",
    subtitle: "Social Media Product",
    description:
      "Contributed to product workflows and reusable frontend experiences for social-media tooling, including content creation, email-building interfaces, responsive workflows, and integration-oriented features.",
    stack: ["React", "Next.js", "TypeScript", "API Integration", "Stripo"],
    image: "/socialhub.png",
  },
  {
    name: "HRMS",
    subtitle: "Independent Full-Stack SaaS Project",
    description:
      "Designed and developed a multi-tenant HR SaaS foundation using a modular monolith architecture. Implemented authentication and session management, tenant isolation, membership-based access, role-based permissions, and protected API workflows. Built the project to demonstrate production-oriented full-stack architecture and scalable module design.",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "RBAC", "Multi-Tenancy"],
    image: "/hrms.png",
  },
  {
    name: "BrokerOS",
    subtitle: "Insurance SaaS",
    description:
      "Contributed to API-driven product workflows, reusable UI components, and business process screens for an insurance-focused SaaS platform. Worked across frontend implementation, API integration, responsive behavior, and workflow-driven features.",
    stack: ["React", "Next.js", "TypeScript", "REST APIs"],
    image: "/brokeros.png",
  },
];

export const additionalExposure = [
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
