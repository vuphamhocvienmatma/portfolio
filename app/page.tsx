import { PERSONAL_INFO, SKILLS, PROJECTS } from "./data";
import { Github, Linkedin, Mail, Terminal, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-emerald-500/30">
      <div className="max-w-3xl mx-auto px-6 py-20 space-y-24">
        
        {/* HEADER */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-400 mb-4 animate-pulse">
            <Terminal size={20} />
            <span className="font-mono text-sm tracking-wider">SYSTEM_ONLINE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-100 tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-emerald-400 font-mono border-l-4 border-emerald-500 pl-4">
            {PERSONAL_INFO.role}
          </h2>
          <p className="text-lg leading-relaxed text-slate-400 max-w-2xl">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex gap-6 pt-4 font-mono text-sm">
            <a href={PERSONAL_INFO.github} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
              <Github size={18} /> GITHUB
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={18} /> LINKEDIN
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
              <Mail size={18} /> EMAIL
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <span className="text-emerald-400 font-mono">01.</span> Technical Arsenal
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="border border-slate-800 p-5 rounded bg-slate-900/30 hover:border-emerald-500/30 transition-all">
                <h4 className="text-emerald-400 font-mono text-xs mb-3 tracking-widest">{skillGroup.category.toUpperCase()}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs font-mono rounded border border-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
            <span className="text-emerald-400 font-mono">02.</span> Selected Projects
          </h3>
          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <div key={index} className="group relative pl-6 border-l-2 border-slate-800 hover:border-emerald-500 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                  <h4 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h4>
                  <span className="font-mono text-xs text-slate-500">{project.period}</span>
                </div>
                <p className="text-emerald-600 font-mono text-xs mb-4 uppercase tracking-wide">{project.role}</p>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">{project.desc}</p>
                
                <ul className="space-y-2 mb-6 text-slate-400 text-sm">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-2">
                      <span className="text-emerald-500 mt-1.5">▪</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/50">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 text-center text-slate-700 text-xs font-mono border-t border-slate-900">
          <p>DEPLOYED ON VERCEL // BUILT WITH NEXT.JS</p>
        </footer>
      </div>
    </main>
  );
}