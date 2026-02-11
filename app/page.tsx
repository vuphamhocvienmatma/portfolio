import { PERSONAL_INFO, SKILLS, PROJECTS } from "./data";
import { Github, Linkedin, Mail, Terminal, ExternalLink, Server, Shield, Database, Code, Layers } from "lucide-react";

export default function Home() {
  // Chọn icon dựa trên category (để làm màu thêm chút)
  const getIconForCategory = (category: string) => {
    if (category.includes("Core")) return <Code size={16} />;
    if (category.includes("Database")) return <Database size={16} />;
    if (category.includes("Security")) return <Shield size={16} />;
    return <Server size={16} />;
  };

  return (
    <main className="min-h-screen font-sans selection:bg-emerald-500/30 selection:text-emerald-50">
      {/* Thêm một dải sáng mờ trên đầu trang để tạo chiều sâu */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-950/0 to-slate-950/0 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 py-24 space-y-32">
        
        {/* ================= HEADER SECTION ================= */}
        <section className="space-y-8">
          {/* Status bar */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-xs font-mono tracking-wider animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            SYSTEM_ONLINE // READY_TO_DEPLOY
          </div>
          
          <div className="space-y-4">
            {/* Tên lớn với hiệu ứng gradient */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-emerald-200 to-slate-100">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-emerald-400 font-mono">
              {PERSONAL_INFO.role}
            </h2>
          </div>

          <p className="text-lg md:text-xl leading-relaxed text-slate-400 max-w-2xl border-l-2 border-slate-800 pl-6 italic">
            "{PERSONAL_INFO.bio}"
          </p>
          
          {/* Social Links - Nút bấm xịn hơn */}
          <div className="flex flex-wrap gap-4 pt-4 font-mono text-sm">
            <a href={PERSONAL_INFO.github} target="_blank" className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 border border-slate-800 rounded hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-950/30 transition-all duration-300 group">
              <Github size={20} className="group-hover:scale-110 transition-transform" /> GITHUB_REPO
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 border border-slate-800 rounded hover:border-blue-500 hover:text-blue-400 hover:bg-blue-950/30 transition-all duration-300 group">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" /> LINKEDIN_PROFILE
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 px-5 py-3 bg-slate-900/80 border border-slate-800 rounded hover:border-slate-400 hover:text-slate-200 transition-all duration-300 group">
              <Mail size={20} className="group-hover:scale-110 transition-transform" /> EMAIL_ME
            </a>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section>
          <h3 className="text-2xl font-bold text-slate-100 mb-10 flex items-center gap-3">
            <Terminal className="text-emerald-500" />
            <span className="text-emerald-400 font-mono">01.</span> 
            Technical Arsenal
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS.map((skillGroup, index) => (
              // Thẻ kỹ năng trông như data chip
              <div key={index} className="group bg-slate-900/40 p-6 rounded-xl border border-slate-800 backdrop-blur-sm hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <h4 className="text-emerald-400 font-mono text-sm mb-4 tracking-widest flex items-center gap-2">
                  {getIconForCategory(skillGroup.category)}
                  {skillGroup.category.toUpperCase()}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-xs font-mono rounded border border-slate-700/50 group-hover:border-emerald-500/30 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PROJECTS SECTION ================= */}
        <section>
           <h3 className="text-2xl font-bold text-slate-100 mb-10 flex items-center gap-3">
            <Layers className="text-emerald-500" />
            <span className="text-emerald-400 font-mono">02.</span> 
            Architectured Systems
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </h3>
          
          <div className="space-y-12">
            {PROJECTS.map((project, index) => (
              // Thẻ dự án với hiệu ứng dải sáng neon bên trái
              <div key={index} className="group relative bg-slate-900/30 rounded-xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-500">
                {/* Dải sáng neon khi hover */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-500 to-blue-500 opacity-50 group-hover:opacity-100 group-hover:w-1.5 transition-all duration-300"></div>
                
                <div className="p-6 md:p-8 pl-8 md:pl-10">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h4 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h4>
                    <span className="font-mono text-xs text-slate-500 mt-2 md:mt-0">{project.period}</span>
                  </div>
                  
                  <p className="inline-block text-emerald-400 font-mono text-xs mb-6 uppercase tracking-wider bg-emerald-950/50 px-2 py-1 rounded border border-emerald-900/50">
                    {project.role}
                  </p>
                  
                  <p className="text-slate-300 mb-6 text-base leading-relaxed font-light">
                    {project.desc}
                  </p>
                  
                  <ul className="space-y-3 mb-8 text-slate-400 text-sm">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 items-start group/item">
                        <span className="text-emerald-600 mt-1 transition-transform group-hover/item:translate-x-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[11px] font-mono text-emerald-300/80 bg-emerald-950/30 border border-emerald-900/50 px-2.5 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-20 pb-10 text-center text-slate-600 text-xs font-mono">
          <p className="mb-2">ENGINEERED FOR SCALABILITY & SECURITY</p>
          <p>DEPLOYED ON VERCEL // BUILT WITH NEXT.JS & TAILWIND</p>
        </footer>
      </div>
    </main>
  );
}