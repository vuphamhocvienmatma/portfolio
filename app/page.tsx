'use client';

import { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILLS_WITH_DEFINITIONS } from "./data";
import { Github, Linkedin, Mail, ArrowRight, BookOpen, Layers, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeDefinition, setActiveDefinition] = useState<string | null>(null);

  return (
    <main className="min-h-screen font-sans">
      
      {/* 1. FLOATING CONTACT BUTTON (Luôn bay theo Scroll) */}
      <motion.a 
        href={`mailto:${PERSONAL_INFO.email}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 cursor-pointer"
      >
        <Mail size={24} />
      </motion.a>

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20 space-y-32">
        
        {/* 2. HERO SECTION (Layout khoa học: Text trái - Ảnh phải) */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold tracking-wider rounded-md border border-blue-100">
              SENIOR BACKEND ENGINEER
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Architecture.<br/>Security.<br/>Scale.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            
            <div className="flex gap-4 pt-4">
              <a href={PERSONAL_INFO.github} target="_blank" className="flex items-center gap-2 text-slate-600 hover:text-black font-medium transition-colors">
                <Github size={20} /> Github
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" className="flex items-center gap-2 text-slate-600 hover:text-blue-700 font-medium transition-colors">
                <Linkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Ảnh đại diện với khung trang trí */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-10"></div>
            <div className="absolute inset-0 bg-slate-900 rounded-2xl -rotate-3 opacity-5"></div>
            <img 
              src={PERSONAL_INFO.avatar} 
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </section>

        {/* 3. INTERACTIVE DICTIONARY (Click to define) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">Technical Glossary</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* List Skills */}
            <div className="flex flex-wrap gap-3 content-start">
              {SKILLS_WITH_DEFINITIONS.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => setActiveDefinition(activeDefinition === skill.id ? null : skill.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                    activeDefinition === skill.id 
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105" 
                      : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:bg-blue-50"
                  }`}
                >
                  {skill.name}
                </button>
              ))}
            </div>

            {/* Definition Box (Hiển thị khi click) */}
            <div className="relative min-h-[150px]">
              <AnimatePresence mode="wait">
                {activeDefinition ? (
                  <motion.div
                    key={activeDefinition}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-6 bg-white rounded-xl border border-blue-100 shadow-xl"
                  >
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2 block">
                      {SKILLS_WITH_DEFINITIONS.find(s => s.id === activeDefinition)?.category}
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mb-3">
                      {SKILLS_WITH_DEFINITIONS.find(s => s.id === activeDefinition)?.name}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {SKILLS_WITH_DEFINITIONS.find(s => s.id === activeDefinition)?.desc}
                    </p>
                  </motion.div>
                ) : (
                  <div className="h-full flex items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm">
                    Select a skill on the left to see my understanding/implementation of it.
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS WITH IMAGES (Card Style) */}
        <section>
          <div className="flex items-center gap-3 mb-10">
            <Layers className="text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">Selected Work</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Ảnh Project */}
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-slate-900 shadow-sm">
                    {project.period}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-blue-600 font-medium mb-4">{project.role}</p>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 pt-10 text-center">
            <p className="text-slate-500 text-sm">
              © 2026 Nguyen Van Hung. Engineered for performance.
            </p>
        </footer>

      </div>
    </main>
  );
}