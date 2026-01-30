"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

export default function TerminalHero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Initial Boot Sequence
    tl.to(".cursor", { opacity: 0, repeat: -1, duration: 0.5, ease: "steps(1)" });
    
    // 2. Typing effect
    tl.to(".line-1", { duration: 1, text: "system.init()", ease: "none" });
    tl.to(".line-2", { duration: 1.5, text: "> user: SHIBILI", ease: "none" }, "+=0.5");
    tl.to(".line-3", { duration: 2, text: "> status: BUILDING_MAGIC...", ease: "none" });
    
    // 3. Glitch the whole container at the end
    tl.to(container.current, { 
      skewX: 20, duration: 0.1, yoyo: true, repeat: 3, opacity: 0.8 
    });
    tl.set(container.current, { skewX: 0, opacity: 1 });
  }, { scope: container });

  return (
    <section ref={container} className="h-screen flex items-center justify-center font-mono bg-[#0a0a0a] text-[#33ff33]">
      <div className="text-xl md:text-3xl leading-relaxed">
        <div className="flex">
          <span className="line-1"></span><span className="cursor">_</span>
        </div>
        <div className="line-2 mt-4 text-white"></div>
        <div className="line-3 mt-4 text-blue-400"></div>
      </div>
    </section>
  );
}