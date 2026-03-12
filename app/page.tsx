"use client";
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ThinkForge",
    desc: "A crowdfunding platform with real-time tracking.",
    tech: ["Next.js", "Firebase", "Stripe"],
    link: "#",
    color: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Travel Tribe",
    desc: "Social network for global solo travelers.",
    tech: ["React Native", "Node.js", "MongoDB"],
    link: "#",
    color: "bg-purple-500/10 border-purple-500/20"
  },
  {
    title: "Telemetry v1",
    desc: "IoT data visualization dashboard.",
    tech: ["D3.js", "MQTT", "React"],
    link: "#",
    color: "bg-emerald-500/10 border-emerald-500/20"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-black">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        <div className="md:col-span-2 md:row-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-lg shadow-cyan-500/20" />
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
              SHIBILI<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">AMAN TK</span>
            </h1>
            <p className="text-white/60 text-lg max-w-md">
              Full-Stack Developer & UI/UX Architect crafting high-performance digital experiences.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/LordSA" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/shibili-aman-tk" className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 flex flex-col justify-center">
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">Currently</p>
          <h2 className="text-xl font-bold mb-1">CSI CEV</h2>
          <p className="text-cyan-500 text-sm font-medium">Design Head</p>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-6 flex flex-col justify-center items-center text-center">
          <div className="text-white/20 mb-3 text-4xl block">🌍</div>
          <h2 className="text-lg font-bold">Kerala, India</h2>
          <p className="text-white/40 text-xs uppercase tracking-tighter">Remote Available</p>
        </div>

        <div className="md:col-span-2 bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">⌨️</div>
            <h2 className="text-xl font-bold tracking-tight">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "GSAP", "Three.js", "Node.js", "Tailwind", "Python", "Figma"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-cyan-500/50 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {projects.map((project, i) => (
          <a key={i} href={project.link} className={`md:col-span-1 border rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group ${project.color}`}>
            <div>
               <h3 className="font-bold text-lg mb-2">{project.title}</h3>
               <p className="text-white/60 text-sm leading-relaxed">{project.desc}</p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {project.tech.map(t => <span key={t} className="text-[10px] opacity-40 uppercase font-bold">{t}</span>)}
              </div>
              <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-white">→</span>
            </div>
          </a>
        ))}

        <div className="md:col-span-1 bg-cyan-500 rounded-3xl p-6 flex flex-col justify-center items-center text-black cursor-pointer hover:bg-cyan-400 transition-colors group relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <h2 className="text-2xl font-black uppercase italic relative z-10">Lets Talk</h2>
          <span className="mt-2 relative z-10">✉️</span>
        </div>
      </main>

      <footer className="mt-12 text-center text-white/20 text-xs uppercase tracking-[0.5em] pb-8">
        Designed & Built by Shibili Aman TK • © 2026
      </footer>
    </div>
  );
}
