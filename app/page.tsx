'use client';

import { useState, useEffect } from 'react';
import { PERSONAL_INFO, SKILLS, PROJECTS, SUMMARY_POINTS } from "./data";
import { Github, Linkedin, Mail, X, ChevronRight, Download, GraduationCap, MapPin, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  // FIX LỖI ĐƠ: Khóa cuộn trang khi mở Modal
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  return (
    <main className="min-h-screen bg-[#030712] text-slate-200 selection:bg-cyan-500/30 font-sans relative">
      
      {/* Background Noise Texture */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
      
      {/* Gradient Glows */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 space-y-32">
        
        {/* === HERO SECTION === */}
        <header className="flex flex-col md:flex-row gap-10 items-start justify-between">
          <div className="space-y-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800 text-cyan-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              AVAILABLE FOR SENIOR ROLES
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-400 font-light">
              <span className="text-cyan-400 font-mono">&lt;</span> {PERSONAL_INFO.role} <span className="text-cyan-400 font-mono">/&gt;</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-cyan-500/50 pl-6">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href={PERSONAL_INFO.github} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                <Github size={20} /> <span className="font-mono text-sm">Github</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/50 transition-colors border border-blue-800/50">
                <Linkedin size={20} /> <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 px-6 py-3 bg-cyan-900/20 text-cyan-400 rounded-lg hover:bg-cyan-900/40 transition-colors border border-cyan-800/50">
                <Mail size={20} /> <span className="font-mono text-sm">Contact Me</span>
              </a>
            </div>
          </div>

          {/* EDUCATION BADGE */}
          <div className="w-full md:w-auto p-6 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl flex flex-col gap-4 min-w-[300px]">
            <div className="flex items-center gap-3 text-cyan-400">
               <GraduationCap size={32} />
               <span className="font-mono text-xs uppercase tracking-widest">Education</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.education.degree}</h3>
              <p className="text-slate-400 text-sm mt-1">{PERSONAL_INFO.education.school}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-bold rounded border border-yellow-500/20">
                GRADE: {PERSONAL_INFO.education.grade.toUpperCase()}
              </div>
            </div>
          </div>
        </header>

        {/* === PROFESSIONAL SUMMARY (NEW) === */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
             <Briefcase className="text-cyan-500" /> Professional Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {SUMMARY_POINTS.map((point, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-slate-900/30 border border-slate-800/50 hover:border-slate-700 transition-colors">
                  <span className="text-cyan-500 mt-1">▹</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                </div>
             ))}
          </div>
        </section>

        {/* === SKILLS (NEW LAYOUT - NO GRID) === */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
             <span className="text-cyan-500 font-mono">01.</span> Technical Arsenal
          </h3>
          
          <div className="space-y-8">
            {SKILLS.map((group, index) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                key={index} 
                className="relative pl-0 md:pl-8"
              >
                {/* Decoration Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-slate-800 via-slate-700 to-transparent hidden md:block"></div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4">
                   <div className={`flex items-center gap-3 min-w-[200px] ${group.color}`}>
                      <group.icon size={24} />
                      <h4 className="font-bold text-lg">{group.category}</h4>
                   </div>
                   
                   <div className="flex flex-wrap gap-2">
                      {group.items.map(skill => (
                        <span key={skill} className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/60 rounded text-sm text-slate-300 hover:text-white hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === PROJECTS === */}
        <section>
          <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
             <span className="text-cyan-500 font-mono">02.</span> Selected Projects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                layoutId={`card-container-${index}`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
                className="group cursor-pointer bg-gradient-to-br from-slate-900 to-[#0b0f1a] border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 shadow-lg"
              >
                <motion.div layoutId={`card-title-${index}`} className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  <ChevronRight className="text-slate-600 group-hover:text-cyan-400" size={20}/>
                </motion.div>
                
                <p className="text-sm font-mono text-cyan-500 mb-3">{project.role}</p>
                <p className="text-slate-400 text-sm line-clamp-3 mb-6">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-slate-800 rounded text-slate-400 border border-slate-700">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-slate-500 py-1">+{project.tech.length - 3}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === FOOTER / CONTACT === */}
        <section className="border-t border-slate-800 pt-16 pb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Scale Your System?</h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              I am currently open for Senior Backend / Technical Lead opportunities.
              If you have a challenge that needs a robust architecture, my inbox is open.
            </p>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)]">
               <Mail size={20} /> Get In Touch
            </a>
            <p className="mt-12 text-xs font-mono text-slate-600">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js & Tailwind.
            </p>
        </section>
      </div>

      {/* === MODAL CHI TIẾT DỰ ÁN (ĐÃ FIX LỖI ĐƠ) === */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            {/* Backdrop - Click để đóng */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Content Card */}
            <motion.div
              layoutId={`card-container-${PROJECTS.indexOf(selectedProject)}`}
              className="relative w-full max-w-3xl bg-[#0f172a] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()} // Chặn click xuyên qua card
            >
              {/* Header cố định */}
              <div className="relative p-8 border-b border-slate-700 bg-slate-900/50">
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-slate-800/50 hover:bg-slate-700 rounded-full text-white transition-colors z-10"
                >
                  <X size={20} />
                </button>
                <motion.h3 layoutId={`card-title-${PROJECTS.indexOf(selectedProject)}`} className="text-3xl font-bold text-white mb-2 pr-10">
                  {selectedProject.title}
                </motion.h3>
                <div className="flex items-center gap-4 text-sm font-mono">
                   <span className="text-cyan-400">{selectedProject.role}</span>
                   <span className="text-slate-500">|</span>
                   <span className="text-slate-400">{selectedProject.period}</span>
                   <span className="text-slate-500">|</span>
                   <span className="text-slate-400">{selectedProject.client}</span>
                </div>
              </div>

              {/* Phần nội dung có thể cuộn - Đã bỏ layoutId để tránh lỗi layout shift */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-8 overflow-y-auto custom-scrollbar"
              >
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Project Description</h4>
                    <p className="text-slate-300 leading-relaxed text-base">
                      {selectedProject.desc}
                    </p>
                  </div>

                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                    <h4 className="text-xs font-bold text-cyan-500 uppercase tracking-widest mb-4">Key Responsibilities & Highlights</h4>
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 text-slate-300 text-sm">
                          <span className="text-cyan-500 mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyan-500 block"></span>
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 rounded text-sm font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}