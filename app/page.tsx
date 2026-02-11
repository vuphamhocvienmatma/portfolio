'use client';

import { useState } from 'react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from "./data";
import { Github, Linkedin, Mail, X, ChevronRight, Terminal, Database, Shield, Cpu, Layers, Code2, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // Animation variants cho Skills
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-purple-500/30">
      
      {/* BACKGROUND HI-TECH: Các đốm sáng di chuyển */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        
        {/* === HEADER SECTION === */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-32 flex flex-col items-start"
        >
          {/* Status Badge Neon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-md mb-8 hover:border-cyan-500/50 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-mono text-xs text-slate-300 tracking-wider">AVAILABLE FOR HIRE</span>
          </div>
          
          {/* Tên Gradient "Màu mè" như bạn muốn */}
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 font-light mb-8 flex items-center gap-3">
            <Code2 className="text-purple-500" />
            <span className="font-mono text-purple-400">is_a</span> 
            {PERSONAL_INFO.role}
          </h2>

          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-10 font-sans border-l-2 border-purple-500/30 pl-6">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex gap-5">
            {[
              { icon: Github, link: PERSONAL_INFO.github, label: "GITHUB" },
              { icon: Linkedin, link: PERSONAL_INFO.linkedin, label: "LINKEDIN" },
              { icon: Mail, link: `mailto:${PERSONAL_INFO.email}`, label: "EMAIL" }
            ].map((item, i) => (
              <a key={i} href={item.link} target="_blank" className="group flex items-center gap-2 px-5 py-3 bg-slate-900/40 border border-slate-800 rounded-lg hover:bg-white/5 hover:border-purple-500/50 transition-all duration-300">
                <item.icon size={20} className="text-slate-400 group-hover:text-purple-400 transition-colors" />
                <span className="font-mono text-xs text-slate-400 group-hover:text-white">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.section>

        {/* === SKILLS SECTION (NO MORE TABLES) === */}
        <section className="mb-32">
          <div className="flex items-end justify-between mb-12 border-b border-slate-800 pb-4">
             <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Zap className="text-yellow-400 fill-yellow-400" size={24} />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-orange-400">
                Tech Stack
              </span>
            </h3>
            <span className="font-mono text-xs text-slate-500 hidden md:block">01 // ARSENAL</span>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10" // Layout tự do hơn
          >
            {SKILLS.map((skillGroup, i) => (
              <div key={i} className="md:col-span-6 lg:col-span-4 space-y-4">
                <h4 className="font-mono text-sm text-cyan-400/80 uppercase tracking-widest border-l-2 border-cyan-500/30 pl-3">
                  {skillGroup.category}
                </h4>
                
                {/* Thay vì kẻ bảng, dùng Flex wrap + Gradient Chips */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idx) => (
                    <motion.span 
                      key={item}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(168,85,247)" }}
                      className="px-4 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 text-slate-300 text-sm font-medium hover:bg-slate-700/60 hover:border-purple-500/50 hover:text-white transition-all cursor-default backdrop-blur-sm shadow-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* === PROJECTS SECTION === */}
        <section>
          <div className="flex items-end justify-between mb-12 border-b border-slate-800 pb-4">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Layers className="text-purple-500" size={24} />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Architectured Systems
              </span>
            </h3>
            <span className="font-mono text-xs text-slate-500 hidden md:block">02 // WORKS</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                layoutId={`card-${index}`}
                key={index}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, shadow: "0 20px 40px -15px rgba(124, 58, 237, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer group relative p-1 rounded-2xl bg-gradient-to-b from-slate-700/50 to-slate-900/50 hover:from-purple-500/50 hover:to-cyan-500/50 transition-colors"
              >
                {/* Inner Card content */}
                <div className="bg-[#0b0f19] h-full w-full rounded-xl p-6 relative overflow-hidden">
                   {/* Background Noise nhỏ trong card */}
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Database size={64} />
                  </div>

                  <div className="flex flex-col h-full">
                    <h4 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                      {project.title}
                    </h4>
                    <span className="text-xs font-mono text-slate-500 mb-4">{project.role}</span>
                    
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                      {project.desc}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                      <div className="flex -space-x-2">
                         {/* Fake Tech Dots */}
                         <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-cyan-400">C#</div>
                         <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] text-purple-400">DB</div>
                      </div>
                      <span className="text-xs font-mono text-purple-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        DETAILS <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* === MODAL DETAIL === */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${PROJECTS.indexOf(selectedProject)}`}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden scrollbar-hide"
            >
              {/* Header của Modal */}
              <div className="relative h-32 bg-gradient-to-r from-slate-900 to-purple-900/50 p-8 flex items-end">
                 <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-white/10 text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">{selectedProject.title}</h3>
                  <p className="font-mono text-cyan-400 text-sm">{selectedProject.period}</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Role & Description</h4>
                  <p className="text-purple-400 font-medium mb-2">{selectedProject.role}</p>
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                    {selectedProject.desc}
                  </p>
                </div>

                <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800/50">
                  <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={14} className="text-yellow-500"/> Engineering Highlights
                  </h4>
                  <ul className="grid gap-3">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm">
                        <span className="text-purple-500 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-purple-500 block"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded-md text-xs font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}