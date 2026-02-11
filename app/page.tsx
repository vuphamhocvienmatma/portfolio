'use client';

import { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS_WITH_DEFINITIONS } from "./data";
import { Github, Linkedin, Mail, ArrowUpRight, ChevronDown, ChevronUp, Layers, BookOpen, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  // State để mở rộng định nghĩa Skill
  const [openSkillId, setOpenSkillId] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col md:flex-row font-sans bg-white text-slate-900">
      
      {/* === CỘT TRÁI: SIDEBAR CỐ ĐỊNH (Thông tin cá nhân) === */}
      <aside className="w-full md:w-[350px] md:h-screen md:sticky md:top-0 border-r border-slate-200 bg-white/80 backdrop-blur p-8 flex flex-col justify-between z-20">
        
        <div className="space-y-8">
          {/* Avatar & Name */}
          <div className="space-y-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm">
               {/* Thay ảnh thật của bạn vào app/data.ts */}
               <img src={PERSONAL_INFO.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">{PERSONAL_INFO.name}</h1>
              <p className="text-blue-600 font-mono text-sm mt-1 bg-blue-50 inline-block px-2 py-1 rounded">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-2">
            <a href={PERSONAL_INFO.github} target="_blank" className="flex items-center gap-3 px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 text-sm font-medium transition-colors">
              <Github size={16} /> Github Profile
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="flex items-center gap-3 px-4 py-2 rounded-md bg-slate-50 hover:bg-slate-100 border border-slate-200 text-sm font-medium transition-colors">
              <Linkedin size={16} /> LinkedIn Profile
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-sm">
              <Mail size={16} /> Email Me
            </a>
          </div>
        </div>

        <div className="hidden md:block text-xs text-slate-400 font-mono">
          © 2026 Portfolio.<br/>Designed for Engineering.
        </div>
      </aside>


      {/* === CỘT PHẢI: NỘI DUNG CHÍNH (Cuộn) === */}
      <main className="flex-1 p-6 md:p-12 md:max-w-4xl space-y-24">
        
        {/* SECTION 1: TECHNICAL GLOSSARY (Interactive) */}
        <section id="skills">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <BookOpen className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900">Technical Glossary</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {SKILLS_WITH_DEFINITIONS.map((skill) => (
              <div key={skill.id} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setOpenSkillId(openSkillId === skill.id ? null : skill.id)}
                  className="w-full flex items-center justify-between p-4 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest w-24">{skill.category}</span>
                    <span className="font-bold text-slate-900">{skill.name}</span>
                  </div>
                  {openSkillId === skill.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                <AnimatePresence>
                  {openSkillId === skill.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-200 bg-white"
                    >
                      <div className="p-4 text-slate-600 text-sm leading-relaxed border-l-4 border-blue-600 ml-4 my-2 bg-blue-50/50">
                        <span className="font-bold text-blue-800">My Implementation:</span> {skill.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 2: SELECTED WORK (Large Images) */}
        <section id="projects">
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Layers className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900">Selected Work</h2>
          </div>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              >
                {/* Cột Ảnh Dự Án */}
                <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-sm group-hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay khi hover */}
                  <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors"></div>
                </div>

                {/* Cột Thông Tin */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
                    </h3>
                    <p className="font-mono text-sm text-slate-500 mt-1">{project.period} — {project.role}</p>
                  </div>

                  <p className="text-slate-600 leading-relaxed">
                    {project.details}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: PROFESSIONAL SUMMARY (Text Only) */}
        <section>
          <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <User className="text-blue-600" size={24} />
            <h2 className="text-2xl font-bold text-slate-900">Summary</h2>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
              <li>6+ years of experience in Software Development.</li>
              <li>Master of Information Security (Excellent Grade).</li>
              <li>Expertise in Microservices & Distributed Systems.</li>
              <li>Strong background in Azure Cloud Ecosystem.</li>
              <li>Fluency in English (Written & Verbal).</li>
              <li>Proven track record with International Clients.</li>
            </ul>
          </div>
        </section>

      </main>
      
      {/* Nút Contact nổi bay theo màn hình */}
      <motion.a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="fixed bottom-6 right-6 md:hidden w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl z-50"
        whileTap={{ scale: 0.9 }}
      >
        <Mail size={20} />
      </motion.a>

    </div>
  );
}