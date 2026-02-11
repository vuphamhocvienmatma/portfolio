'use client';

import { useState } from 'react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from "./data";
import { Github, Linkedin, Mail, X, ChevronRight, Terminal, Database, Shield, Cpu, Layers } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from 'clsx';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30">
      {/* Background Gradient Blobs - Tạo hiệu ứng ánh sáng nền di chuyển */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        
        {/* HEADER SECTION - Animation Fade In */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800 rounded-full">
            System status: ONLINE
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-6 flex items-center gap-2 justify-center md:justify-start">
            <span className="text-cyan-400 font-mono">def</span> {PERSONAL_INFO.role}
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-8 mx-auto md:mx-0">
            {PERSONAL_INFO.bio}
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            {[
              { icon: Github, link: PERSONAL_INFO.github },
              { icon: Linkedin, link: PERSONAL_INFO.linkedin },
              { icon: Mail, link: `mailto:${PERSONAL_INFO.email}` }
            ].map((item, i) => (
              <a key={i} href={item.link} target="_blank" className="p-3 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-950/20 hover:text-cyan-400 transition-all duration-300">
                <item.icon size={20} />
              </a>
            ))}
          </div>
        </motion.section>

        {/* SKILLS SECTION - Bento Grid Style */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
            <Terminal className="text-cyan-500" size={20} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Tech Stack
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-600 transition-colors backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3 text-cyan-400">
                  {i === 0 ? <Cpu size={18}/> : i === 1 ? <Database size={18}/> : <Shield size={18}/>}
                  <h4 className="font-mono text-sm font-bold uppercase">{skill.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="text-xs px-2 py-1 rounded bg-slate-800/50 text-slate-300 border border-slate-700/50">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS SECTION - Interactive Cards */}
        <section>
          <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-2">
            <Layers className="text-purple-500" size={20} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              Select Project
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <motion.div
                layoutId={`card-${index}`}
                key={index}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
                className="cursor-pointer group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <ChevronRight className="text-slate-600 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm font-mono text-purple-400 mb-2">{project.role}</p>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && <span className="text-[10px] text-slate-500 py-1">+more</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* POPUP MODAL DETAIL - Hiện ra khi click */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${PROJECTS.indexOf(selectedProject)}`}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700 rounded-2xl p-6 md:p-10 shadow-2xl"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedProject(null); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-purple-400 font-mono mb-6">{selectedProject.role} | {selectedProject.period}</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Overview</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.desc}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-slate-300 text-sm">
                        <span className="text-cyan-500 mt-1">▹</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Technology</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-cyan-950/30 border border-cyan-900/50 text-cyan-300 rounded text-xs font-mono">
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