import { Server, Database, Shield, Code, Terminal, Layers } from "lucide-react";

export const PERSONAL_INFO = {
  name: "Vu Pham",
  role: "Senior Backend Engineer | .NET & Security Specialist",
  bio: "Backend Engineer with a deep background in Information Security. I don't just write code; I architect high-performance Distributed Systems, Microservices, and Secure Infrastructures using .NET Core. Transforming complex business logic into scalable, fault-tolerant solutions.",
  email: "contact@hungbackend.dev",
  github: "https://github.com/vuphamhocvienmatma",
  linkedin: "http://linkedin.com/in/v%C5%A9-ph%E1%BA%A1m-82719626b",
};

export const SKILLS = [
  { category: "Core Backend", items: [".NET Core", "ASP.NET WebAPI", "Entity Framework", "C#", "SignalR"] },
  { category: "Database & Cache", items: ["SQL Server", "PostgreSQL", "Redis", "CouchDB", "Elasticsearch"] },
  { category: "Architecture", items: ["Microservices", "DDD", "CQRS", "Event-Sourcing", "SAGA Pattern"] },
  { category: "Cloud & DevOps", items: ["Azure Blob/WebJob", "Docker", "RabbitMQ", "CI/CD"] },
  { category: "Security", items: ["OAuth2/OpenID", "Digital Signature", "Cryptography", "OWASP"] },
];

export const PROJECTS = [
  {
    title: "Banking Evaluate System",
    role: "Backend Lead",
    period: "2023 - Present",
    desc: "A high-performance analysis system providing multi-dimensional financial reports for a Singaporean client.",
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
    desc: "A comprehensive HR super-application focusing on secure transactions and digital signatures.",
    tech: ["Azure Functions", "Azure Blob", "SAP Integration", "Angular", ".NET 6"],
    highlights: [
      "Designed secure Auth flows (OAuth2) and Digital Signature integration ensuring legal validity.",
      "Architected background processing jobs using Azure Web Jobs and scalable storage with Azure Blob.",
      "Built robust connectors for SAP API integration to synchronize extensive HR data.",
      "Implemented a dynamic, matrix-based RBAC system.",
    ],
  },
  {
    title: "OmiFab - MesserSoft",
    role: "Full-stack Developer",
    period: "2021 - 2022",
    desc: "Industrial automation system processing Sales Quotations and automating machine workflows.",
    tech: ["ASP.NET Core", "Blazor", "CouchDB", "MSSQL", "SignalR"],
    highlights: [
      "Translated complex industrial cutting requirements into automated work-step algorithms.",
      "Managed a hybrid data layer using MSSQL for transactional data and CouchDB for flexible documents.",
      "Optimized database queries to ensure fast data retrieval and processing.",
    ],
  },
];