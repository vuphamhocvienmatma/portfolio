import { Server, Database, Cloud, Shield, Code2, Globe, Cpu, Layers } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Pham Nguyen Vu",
  role: "Senior Backend Engineer | .NET & Security Specialist",
  bio: "Software Engineer with over 6 years of experience, possessing a strong technical foundation in .NET and cloud technologies. Proven track record of leading projects, defining resilient system architectures, and engineering high-performance data storage solutions.",
  email: "ezralight@outlook.com.vn",
  github: "https://github.com/vuphamhocvienmatma",
  linkedin: "http://linkedin.com/in/v%C5%A9-ph%E1%BA%A1m-82719626b",
  location: "Hanoi, Vietnam",
  experience_years: "6+",
  education: {
    degree: "Master of Information Security",
    school: "Academy of Cryptography Techniques",
    grade: "Excellent",
    year: "2024"
  }
};

export const SUMMARY_POINTS = [
  "6+ years of experience working as a software developer.",
  "Excellent written and verbal communication skills with proven fluency in English.",
  "Experience in implementing design patterns (MVC, DTO) for multitier distributed Enterprise Applications.",
  "Worked with international customers (US, Singapore, Thailand).",
  "Strong expertise in OOP, SOLID, UML, Design Patterns, and Microservices Architecture.",
  "Deep knowledge of Azure Ecosystem (AD, Blob, Web Job, Functions, Service Bus).",
  "Architecting applications as sets of independent services (Microservices).",
  "Proficient in Agile/Scrum methodologies."
];

export const SKILLS = [
  { 
    category: "Core Backend", 
    icon: Server,
    color: "text-blue-400",
    items: [".NET Core", "ASP.NET WebAPI", "C#", "Entity Framework", "SignalR", "Clean Architecture"] 
  },
  { 
    category: "Database & Cache", 
    icon: Database,
    color: "text-emerald-400",
    items: [".SQL Server", "PostgreSQL", "Redis", "CouchDB", "Elasticsearch", "Optimization"] 
  },
  { 
    category: "Cloud (Azure)", 
    icon: Cloud,
    color: "text-sky-400",
    items: ["Azure App Services", "Azure Functions", "Service Bus", "Azure SQL", "Key Vault", "Azure AD"] 
  },
  { 
    category: "Architecture", 
    icon: Layers,
    color: "text-purple-400",
    items: ["Microservices", "DDD", "CQRS", "Event-Sourcing", "SAGA Pattern", "Distributed Systems"] 
  },
  { 
    category: "Security", 
    icon: Shield,
    color: "text-red-400",
    items: ["OAuth2/OpenID", "Digital Signature", "Cryptography", "OWASP Top 10", "Identity Mgmt"] 
  },
  { 
    category: "Frontend & Others", 
    icon: Globe,
    color: "text-orange-400",
    items: ["Angular", "TypeScript", "Docker", "CI/CD", "RabbitMQ", "Scrum/Agile"] 
  },
];

export const PROJECTS = [
  {
    title: "Banking Evaluate System",
    role: "Backend Lead",
    period: "2023 - Present",
    client: "Singapore",
    desc: "A high-performance analysis system designed to provide detailed, visual reports on individual branches and performance over the years.",
    tech: [".NET Core", "RabbitMQ", "Redis", "Microservices", "SQL Server"],
    highlights: [
      "Designed a Microservices architecture handling high concurrency for multi-dimensional analytical reports.",
      "Implemented CQRS pattern and Redis Caching strategies to reduce report generation time by 40%.",
      "Orchestrated inter-service communication using RabbitMQ to ensure data consistency.",
      "Optimized complex queries for financial risk metrics (credit, market, operational risks).",
    ],
  },
  {
    title: "HR Management Super App",
    role: "Senior Backend Developer",
    period: "2022 - 2023",
    client: "Thailand",
    desc: "A comprehensive HR super-application containing all information, conducting HR-related transactions, and receiving timely support.",
    tech: ["Azure Functions", "Azure Blob", "SAP Integration", "Angular", ".NET 6"],
    highlights: [
      "Designed secure Auth flows (OAuth2) and Digital Signature integration ensuring legal validity.",
      "Architected background processing jobs using Azure Web Jobs and scalable storage with Azure Blob.",
      "Built robust connectors for SAP API integration to synchronize extensive HR data.",
      "Implemented a dynamic, matrix-based RBAC (Role-Based Access Control) system.",
    ],
  },
  {
    title: "OmiFab - MesserSoft",
    role: "Full-stack Developer",
    period: "2021 - 2022",
    client: "Global",
    desc: "A system to process Sales Quotations for cutting systems. We receive orders from customers, analyze them, and automate machine workflows.",
    tech: ["ASP.NET Core", "Blazor", "CouchDB", "MSSQL", "SignalR"],
    highlights: [
      "Translated complex industrial cutting requirements into automated work-step algorithms.",
      "Managed a hybrid data layer using MSSQL for relational transactional data and CouchDB for flexible document storage.",
      "Optimized database queries to ensure fast data retrieval and processing.",
    ],
  },
];