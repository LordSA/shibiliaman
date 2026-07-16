import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function FlagshipShowcase() {
  return (
    <div className="flex flex-col overflow-hidden pb-10 md:pb-20">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold mb-4">
              Flagship System
            </h2>
            <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white font-mono uppercase tracking-tighter">
              Resume Solutions
            </h1>
          </>
        }
      >
        <div className="w-full h-full bg-[#101114] border border-zinc-800 rounded-xl overflow-hidden flex flex-col p-6 font-mono text-left">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
            <span className="text-[10px] text-zinc-500">RESUME-SOLUTIONS.SHIBILI.TECH</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 overflow-hidden">
            <div className="md:col-span-4 border-r border-zinc-800/50 pr-6 space-y-4">
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="text-[8px] text-zinc-500 uppercase block">System Profile</span>
                <span className="text-xs text-white font-bold">ATS Resume Parser</span>
              </div>
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="text-[8px] text-zinc-500 uppercase block">Engine Model</span>
                <span className="text-xs text-[#c5a059] font-bold">OpenAI GPT-4o</span>
              </div>
              <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
                <span className="text-[8px] text-zinc-500 uppercase block">Build Latency</span>
                <span className="text-xs text-emerald-500 font-bold">0.82 Seconds</span>
              </div>
            </div>
            
            <div className="md:col-span-8 space-y-4 overflow-y-auto">
              <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
                <span className="text-[9px] text-[#c5a059] block mb-2 font-bold uppercase">System Console</span>
                <div className="text-[10px] text-zinc-400 space-y-1">
                  <p>&gt; Initializing neural parser...</p>
                  <p>&gt; Scoring layout against recruiter heuristics...</p>
                  <p className="text-emerald-500">&gt; ATS Score calculated: 98% Match</p>
                </div>
              </div>
              
              <div className="p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
                <span className="text-[9px] text-[#c5a059] block mb-2 font-bold uppercase">Features Output</span>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans font-light">
                  Direct AI PDF generation, structured schema alignment, score breakdown tables, and custom recruiter summaries built dynamically at high speeds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerScroll>
    </div>
  );
}
