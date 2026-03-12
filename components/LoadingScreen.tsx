"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const container = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: onComplete,
        });
      },
    });

    // Boot sequence
    tl.to(".boot-1", { duration: 0.8, text: "INITIALIZING_CORE_SYSTEMS...", ease: "none" });
    tl.to(".boot-2", { duration: 0.6, text: "LOADING_ASSETS...", ease: "none" }, "+=0.2");
    
    // Progress bar simulation
    tl.to({}, { 
      duration: 2, 
      onUpdate: function() {
        setPercent(Math.round(this.progress() * 100));
      }
    }, "-=0.2");

    tl.to(".boot-3", { duration: 0.5, text: "SYSTEM_READY_0x7F", ease: "none" });
    
    // Glitch exit
    tl.to(container.current, { 
      skewX: 10, 
      duration: 0.05, 
      repeat: 5, 
      yoyo: true, 
      opacity: 0.5 
    });
  }, { scope: container });

  return (
    <div 
      ref={container} 
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono text-[#33ff33] p-4"
    >
      <div className="w-full max-w-md space-y-4 text-center flex flex-col items-center">
        <div className="boot-1 h-6 flex items-center justify-center w-full"></div>
        <div className="boot-2 h-6 text-blue-400 flex items-center justify-center w-full"></div>
        
        <div className="relative w-full h-2 bg-gray-900 border border-[#33ff33]/30 overflow-hidden">
          <div 
            className="h-full bg-[#33ff33] transition-all duration-100 ease-out" 
            style={{ width: `${percent}%` }}
          ></div>
        </div>
        
        <div className="flex flex-col items-center text-sm w-full">
          <span className="boot-3 mb-2 flex items-center justify-center h-4"></span>
          <span className="text-xl font-bold tracking-tighter tabular-nums">{percent}%</span>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-pulse text-xs opacity-50 w-full text-center">
        SCANNING SIGNAL... [49.382° N, 121.342° W]
      </div>
    </div>
  );
}
