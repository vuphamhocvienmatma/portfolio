import { Server, Database, Cloud, Shield, Code2, Layers, Cpu, Globe } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Nguyen Van Hung",
  role: "Senior Backend Engineer",
  bio: "Software Engineer with 6+ years of experience. I architect resilient systems, not just write code. Master of Information Security.",
  email: "ezralight@outlook.com.vn",
  github: "https://github.com/vuphamhocvienmatma",
  linkedin: "http://linkedin.com/in/v%C5%A9-ph%E1%BA%A1m-82719626b",
  avatar: "https://placehold.co/400x400/2563eb/white?text=NVH",  
};

export const SKILLS_WITH_DEFINITIONS = [
  { 
    id: "microservices",
    name: "Microservices", 
    category: "Architecture",
    desc: "Architecting applications as a collection of loosely coupled services. Experienced in handling distributed transactions using SAGA pattern."
  },
  { 
    id: "cqrs",
    name: "CQRS", 
    category: "Architecture",
    desc: "Command Query Responsibility Segregation. Decoupling read and write operations to scale them independently, often used with Event Sourcing."
  },
  { 
    id: "redis",
    name: "Redis Caching", 
    category: "Performance",
    desc: "Implemented distributed caching strategies (Cache-aside, Write-through) to reduce DB load and improve latency by 40%."
  },
  { 
    id: "azure-ad",
    name: "Azure AD / OAuth2", 
    category: "Security",
    desc: "Deep understanding of Identity Management, OIDC flows, and securing APIs with JWT tokens and Role-based policies."
  },
  { 
    id: "rabbitmq",
    name: "RabbitMQ", 
    category: "Messaging",
    desc: "Designing asynchronous communication backbones to ensure system resilience and decoupling between services."
  },
  { 
    id: "sql-opt",
    name: "SQL Optimization", 
    category: "Database",
    desc: "Expert in analyzing Execution Plans, Indexing strategies, and partitioning to handle millions of records."
  },
];

export const PROJECTS = [
  {
    title: "Banking Evaluate System",
    role: "Backend Lead",
    period: "2023 - Present",
    desc: "High-performance analysis system for multi-dimensional financial reports.",
    image: "https://placehold.co/600x400/1e293b/white?text=System+Architecture",
    tech: [".NET Core", "RabbitMQ", "Redis", "CQRS"],
    details: "Designed Microservices handling high concurrency. Implemented CQRS and Redis Caching to reduce report generation time by 40%."
  },
  {
    title: "HR Management Super App",
    role: "Senior Backend Dev",
    period: "2022 - 2023",
    desc: "Comprehensive HR super-app with Digital Signature and Secure Auth.",
    image: "https://placehold.co/600x400/0f172a/white?text=Secure+Flow",
    tech: ["Azure Functions", "Azure Blob", "SAP Integration"],
    details: "Designed secure Auth flows (OAuth2) and Digital Signature. Architected background jobs using Azure Web Jobs."
  },
  {
    title: "OmiFab - MesserSoft",
    role: "Full-stack Dev",
    period: "2021 - 2022",
    desc: "Industrial automation system for processing Sales Quotations.",
    image: "https://placehold.co/600x400/334155/white?text=Automation+Logic", 
    tech: ["ASP.NET Core", "Blazor", "CouchDB"],
    details: "Managed hybrid data layer (SQL + NoSQL). Translated complex industrial requirements into algorithms."
  },
];