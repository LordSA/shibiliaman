"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
}

export default function PortfolioPage() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Initial Hero Typing
    tl.to(".cursor", { opacity: 0, repeat: -1, duration: 0.5, ease: "steps(1)" });
    tl.from(".hero-content", { opacity: 0, duration: 1 }, 0);
    tl.to(".line-1", { duration: 1, text: "SYSTEM.RUN(DASHBOARD_v3.0)", ease: "none" });
    tl.to(".line-2", { duration: 1.5, text: "> LOADING_MODULES: [OK]", ease: "none" }, "+=0.3");

    // 2. Scroll Animations for Bento Cards
    const cards = gsap.utils.toArray<HTMLElement>(".bento-card");
    cards.forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.7)",
      });
    });
  }, { scope: container });

  const experience = [
    { role: "Co-Lead", company: "LucidPixls", date: "2025" },
    { role: "Design Head", company: "CSI CEV", date: "2025" },
    { role: "UI Designer", company: "HCTMM", date: "2025" },
  ];

  return (
    <main ref={container} className="min-h-screen bg-[#0a0a0a] font-mono text-[#33ff33] p-4 lg:p-8 overflow-x-hidden">
      {/* HUD Header */}
      <nav className="flex flex-wrap items-center justify-between mb-8 pb-4 border-b border-[#33ff33]/20 text-[10px] tracking-[0.2em] uppercase">
        <div className="flex gap-8">
          <span className="text-white bg-[#33ff33]/20 px-2 py-1">TERMINAL_v3.0</span>
          <span className="opacity-50 hidden md:block">STATUS: AUTHORIZED</span>
        </div>
        <div className="flex gap-6">
          <a href="#exp" className="hover:text-white transition-colors">EXPLORER</a>
          <a href="#skills" className="hover:text-white transition-colors">KERNEL</a>
          <a href="#projects" className="hover:text-white transition-colors">DEPLOYS</a>
        </div>
      </nav>

      {/* Bento Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 max-w-7xl mx-auto h-auto md:h-[1200px]">
        
        {/* Title Block - Large */}
        <div className="md:col-span-3 md:row-span-2 bento-card border border-[#33ff33]/30 bg-[#111] p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl font-black select-none">SEE</div>
          <div className="hero-content relative z-10">
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-4 italic">
              SEE THE <span className="text-[#33ff33]">FUTURE</span>
            </h1>
            <div className="flex items-center text-sm md:text-xl opacity-80">
              <span className="mr-4">$</span>
              <span className="line-1"></span><span className="cursor">_</span>
            </div>
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <div className="w-2 h-2 bg-[#33ff33] animate-pulse"></div>
            <div className="w-2 h-2 bg-[#33ff33] opacity-40"></div>
            <div className="w-2 h-2 bg-[#33ff33] opacity-20"></div>
          </div>
        </div>

        {/* Current Status - Square */}
        <div className="md:col-span-1 md:row-span-2 bento-card border border-[#33ff33]/30 bg-[#00f2ff]/5 p-6 flex flex-col justify-between hover:bg-[#00f2ff]/10 transition-colors group">
          <div className="text-[10px] uppercase tracking-widest text-[#00f2ff]">Network_Signal</div>
          <div className="text-4xl font-bold text-[#00f2ff] group-hover:scale-110 transition-transform origin-left">{">_"}</div>
          <div>
            <div className="text-xs text-white mb-2">LATENCY: 12ms</div>
            <div className="h-1 w-full bg-[#00f2ff]/20 overflow-hidden">
               <div className="h-full bg-[#00f2ff] w-2/3 animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
        </div>

        {/* About / Intro - Text Block */}
        <div id="exp" className="md:col-span-2 md:row-span-2 bento-card border border-[#33ff33]/30 bg-[#111] p-8">
          <h2 className="text-[#33ff33] text-xs uppercase tracking-[0.4em] mb-6 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#33ff33]"></span> THE_TERMINAL
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            SHIBILI AMAN TK // FULL-STACK DEVELOPER & UI/UX ENTHUSIAST. 
            SPECIALIZING IN BUILDING HIGH-PERFORMANCE INTERFACES AND 
            SCALABLE DIGITAL ECOSYSTEMS WITH A FOCUS ON MOTION DESIGN.
          </p>
          <div className="p-4 bg-black border-l-2 border-[#ff0055] text-[10px]">
            <span className="text-[#ff0055] font-bold">WARNING:</span> SYSTEM_OVERRIDE_ENABLED
          </div>
        </div>

        {/* JSON Data Block - Small */}
        <div className="md:col-span-1 md:row-span-2 bento-card border border-[#33ff33]/30 bg-black p-6 font-mono text-xs">
          <div className="text-blue-400">{"{"}</div>
          <div className="pl-4">
            <span className="text-cyan-300">"VERSION"</span>: <span className="text-orange-400">"3.0.0"</span>,
            <br />
            <span className="text-cyan-300">"MODE"</span>: <span className="text-orange-400">"PRODUCTION"</span>,
            <br />
            <span className="text-cyan-300">"ACCESS"</span>: <span className="text-orange-400">"GRANTED"</span>
          </div>
          <div className="text-blue-400">{"}"}</div>
          <div className="mt-8 pt-4 border-t border-white/10 opacity-30">
             // DECRYPTED_META_DATA
          </div>
        </div>

        {/* Skills - Square */}
        <div id="skills" className="md:col-span-1 md:row-span-2 bento-card border border-[#33ff33]/30 bg-[#33ff33]/5 p-6 space-y-2">
          <h3 className="text-[10px] text-white/40 uppercase mb-4">Kernel_Modules</h3>
          {["NEXT.JS", "GSAP", "FLUTTER", "PYTHON", "NODE.JS"].map(s => (
            <div key={s} className="flex justify-between items-center text-[10px] border-b border-[#33ff33]/10 pb-1">
              <span>{s}</span>
              <span className="text-white">[OK]</span>
            </div>
          ))}
        </div>

        {/* Select Menu Style - Project List */}
        <div id="projects" className="md:col-span-1 md:row-span-2 bento-card border border-[#33ff33]/30 bg-black p-6 overflow-hidden">
          <h2 className="text-2xl font-black italic tracking-tighter text-[#33ff33] mb-8 leading-none">
            SELECT<br/>PROJECTS
          </h2>
          <ul className="text-[10px] space-y-4">
            <li className="hover:text-white cursor-pointer flex gap-2">
              <span className="opacity-40">01.</span> THINKFORGE
            </li>
            <li className="hover:text-white cursor-pointer flex gap-2">
              <span className="opacity-40">02.</span> TRAVEL_TRIBE
            </li>
            <li className="hover:text-white cursor-pointer flex gap-2">
              <span className="opacity-40">03.</span> TELEMETRY
            </li>
          </ul>
        </div>

        {/* High Tech Metrics - Wide */}
        <div className="md:col-span-3 md:row-span-2 bento-card border border-[#33ff33]/30 bg-[#111] p-8 flex flex-col md:flex-row gap-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#33ff33]/50 to-transparent"></div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Fixed Dimension Terminal</h3>
            <p className="text-[10px] opacity-60 leading-relaxed uppercase">
              Operationalizing complex datasets into intuitive terminal-inspired dashboards. 
              The system supports multi-threaded processing and real-time visualization.
            </p>
            <div className="mt-8 flex gap-4">
               <div className="w-3 h-3 bg-white"></div>
               <div className="w-3 h-3 bg-white"></div>
               <div className="w-3 h-3 bg-white"></div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center border-l border-[#33ff33]/20 pl-8">
             <div className="relative w-32 h-32 rounded-full border-4 border-dashed border-[#33ff33]/20 p-4 animate-[spin_10s_linear_infinite]">
                 <div className="w-full h-full rounded-full border-2 border-[#33ff33] border-t-white"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold">80%</div>
             </div>
          </div>
        </div>

      </div>

      <footer className="mt-16 text-center text-[8px] opacity-20 uppercase tracking-[0.5em]">
        Signal_Detected // {new Date().getFullYear()} // LordSA_Core
      </footer>

      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .bento-card {
           transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .bento-card:hover {
           transform: translateY(-5px);
           border-color: rgba(51, 255, 51, 0.6);
        }
      `}</style>
    </main>
  );
}