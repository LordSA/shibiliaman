"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CommandResponse {
  command: string;
  output: React.ReactNode;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandResponse[]>([]);
  const [isMaximized, setIsMaximized] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandResponses: Record<string, React.ReactNode> = {
    help: (
      <div className="grid grid-cols-2 gap-2 mt-1 font-mono text-sm opacity-90">
        <span className="text-[#33ff33]">about</span> <span>- display biography</span>
        <span className="text-[#33ff33]">projects</span> <span>- list active projects</span>
        <span className="text-[#33ff33]">skills</span> <span>- view tech stack</span>
        <span className="text-[#33ff33]">clear</span> <span>- clear terminal</span>
        <span className="text-[#33ff33]">whoami</span> <span>- identity check</span>
      </div>
    ),
    about: "SHIBILI AMAN TK // A Full-Stack Developer & UI/UX Architect based in India. Specializing in high-performance web systems and cinematic animations.",
    whoami: "USER: GUEST // ROLE: VISITOR // STATUS: AUTHENTICATED",
    projects: (
      <div className="mt-2 space-y-2 font-mono text-sm">
        <div>[1] <span className="text-[#33ff33]">ThinkForge</span> - Crowdfunding platform</div>
        <div>[2] <span className="text-[#33ff33]">Travel Tribe</span> - Travel networking app</div>
      </div>
    ),
    skills: "React, Next.js, Node.js, GSAP, Tailwind CSS, TypeScript, Figma",
    clear: null,
  };

  useGSAP(() => {
    gsap.from(".window-gui", { 
      scale: 0.8, 
      opacity: 0, 
      duration: 1, 
      ease: "power3.out",
      y: 20
    });
  }, { scope: container });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (cmd === "") return;

    if (cmd === "clear") {
      setHistory([]);
    } else {
      const response = commandResponses[cmd] || `Unknown command: ${cmd}. Type 'help'.`;
      setHistory((prev) => [...prev, { command: input, output: response }]);
    }
    setInput("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div ref={container} className="h-screen w-full bg-[#121212] flex items-center justify-center p-4 selection:bg-[#33ff33] selection:text-black">
      
      {/* Wallpapers / HUD Background elements can go here */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black via-[#0a0a0a] to-black opacity-100"></div>

      {/* Terminal Window GUI */}
      <div 
        className={`window-gui relative flex flex-col bg-black border border-white/10 rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.8)] transition-all duration-300 overflow-hidden
        ${isMaximized ? 'w-[98vw] h-[95vh]' : 'w-full max-w-4xl h-[600px]'}
        `}
        onClick={focusInput}
      >
        
        {/* GUI Header / Title Bar */}
        <div className="h-10 bg-[#1e1e1e] flex items-center justify-between px-4 select-none">
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <div 
                className="w-3 h-3 rounded-full bg-[#ff5f57] cursor-pointer hover:bg-[#ff7b75]" 
                title="This does nothing"
              ></div>
              <div 
                className="w-3 h-3 rounded-full bg-[#febc2e] cursor-pointer"
                title="Minimize logic placeholder"
              ></div>
              <div 
                className="w-3 h-3 rounded-full bg-[#28c840] cursor-pointer"
                onClick={(e) => { e.stopPropagation(); setIsMaximized(!isMaximized); }}
              ></div>
            </div>
            <div className="text-[11px] text-white/40 font-medium tracking-wide flex items-center gap-2">
              <span className="opacity-60">Terminal</span> — shibili@LordSA — 80x24
            </div>
          </div>
          
          <div className="text-[10px] text-white/20 uppercase tracking-[2px]">
             {isMaximized ? "Fullscreen Mode" : "Window Mode"}
          </div>
        </div>

        {/* Content Area */}
        <div 
          ref={scrollRef} 
          className="flex-1 p-6 overflow-y-auto font-mono text-[#e0e0e0] bg-[#0c0c0c]/90 backdrop-blur-sm custom-scrollbar"
        >
          <div className="mb-4 text-[#33ff33]">
            Welcome to LordSA-OS Terminal (GUI Version 1.0.4) <br/>
            Last login: {new Date().toLocaleDateString()} on ttys002
          </div>

          <div className="space-y-4">
            {history.map((entry, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
                <div className="flex items-center gap-2 text-white/50">
                  <span className="text-[#33ff33]">shibili@LordSA</span>
                  <span>:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-white">$ {entry.command}</span>
                </div>
                <div className="mt-1 pl-4 border-l border-white/5 text-sm leading-relaxed opacity-95">
                  {entry.output}
                </div>
              </div>
            ))}
          </div>

          {/* Form / Prompt */}
          <form onSubmit={handleCommand} className="mt-4 flex items-center gap-2">
            <span className="text-[#33ff33] font-bold">shibili@LordSA</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$</span>
            <input
              ref={inputRef}
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-white caret-[#33ff33]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>

        {/* GUI Footer */}
        <div className="h-6 bg-[#1e1e1e]/50 border-t border-white/5 flex items-center px-4 text-[9px] text-white/20 justify-between">
           <div className="flex gap-3">
              <span>Main Bash Process</span>
              <span>•</span>
              <span>PID: 8842</span>
           </div>
           <div>Shibili Aman Portfolio 2026</div>
        </div>
      </div>
    </div>
  );
}
