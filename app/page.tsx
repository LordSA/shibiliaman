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
    tl.to(".line-1", { duration: 1, text: "system.run(PROFILE_v2.0)", ease: "none" });
    tl.to(".line-2", { duration: 1.5, text: "> NAME: SHIBILI AMAN TK", ease: "none" }, "+=0.3");
    tl.to(".line-3", { duration: 1.5, text: "> ROLE: FULL-STACK DEVELOPER & UI/UX ENTHUSIAST", ease: "none" }, "+=0.3");

    // 2. Scroll Animations for Sections
    const sections = gsap.utils.toArray<HTMLElement>(".section-block");
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
      });
    });
  }, { scope: container });

  const experience = [
    { role: "Co-Lead", company: "LucidPixls", date: "Oct 2025 - Present" },
    { role: "Design Head", company: "CSI CEV", date: "Mar 2025 - Present" },
    { role: "UI Designer (Intern)", company: "HCTMM Medtech", date: "Jun - Oct 2025" },
  ];

  const projects = [
    { name: "Thinkforge", desc: "Crowdfunding Platform Prototype" },
    { name: "Travel Tribe", desc: "Solo Traveler Social Connectivity App" },
    { name: "Telemetry System", desc: "Real-time Data Tracking & Visualization" },
  ];

  return (
    <main ref={container} className="bg-[#0a0a0a] font-mono text-[#33ff33] selection:bg-[#33ff33] selection:text-[#0a0a0a]">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center p-6 border-b border-[#33ff33]/10">
        <div className="hero-content text-lg md:text-3xl max-w-4xl w-full">
          <div className="flex items-center">
            <span className="text-[#33ff33] mr-4">$</span>
            <span className="line-1"></span><span className="cursor">_</span>
          </div>
          <div className="line-2 mt-4 text-white"></div>
          <div className="line-3 mt-4 text-blue-400"></div>
          
          <div className="mt-12 flex gap-6 text-sm md:text-base opacity-70">
            <a href="https://github.com/LordSA" target="_blank" className="hover:text-white transition-colors">[GITHUB]</a>
            <a href="https://linkedin.com/in/shibili-aman-tk" target="_blank" className="hover:text-white transition-colors">[LINKEDIN]</a>
            <a href="mailto:shibili@example.com" className="hover:text-white transition-colors">[CONTACT]</a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-xs opacity-40">
          SCROLL_TO_DECRYPT_DATA ↓
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto section-block">
        <h2 className="text-2xl mb-12 flex items-center">
          <span className="bg-[#33ff33] text-[#0a0a0a] px-2 py-1 mr-4">01</span> 
          EXECUTING_EXPERIENCE_LOG
        </h2>
        <div className="space-y-12">
          {experience.map((exp, i) => (
            <div key={i} className="group relative pl-8 border-l border-[#33ff33]/30">
              <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#33ff33] scale-0 group-hover:scale-100 transition-transform"></div>
              <p className="text-blue-400 text-sm mb-1">{exp.date}</p>
              <h3 className="text-xl text-white font-bold">{exp.role}</h3>
              <p className="text-[#33ff33] opacity-80">@ {exp.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto section-block">
        <h2 className="text-2xl mb-12 flex items-center">
          <span className="bg-[#33ff33] text-[#0a0a0a] px-2 py-1 mr-4">02</span> 
          KERNEL_CAPABILITIES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["React/Next.js", "GSAP", "Flutter", "Python", "Node.js", "UI/UX Design", "Figma", "MySQL"].map((skill) => (
            <div key={skill} className="border border-[#33ff33]/20 p-4 text-center hover:bg-[#33ff33]/5 hover:border-[#33ff33] transition-all">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto section-block">
        <h2 className="text-2xl mb-12 flex items-center">
          <span className="bg-[#33ff33] text-[#0a0a0a] px-2 py-1 mr-4">03</span> 
          PROJECT_DEPLOYMENTS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div key={i} className="p-6 border border-[#33ff33]/20 hover:skew-x-1 transition-transform group">
              <h3 className="text-xl text-white mb-2 group-hover:text-[#33ff33]">{proj.name}</h3>
              <p className="text-sm opacity-70 leading-relaxed mb-4">{proj.desc}</p>
              <div className="text-xs text-blue-400">[ VIEW_SOURCE ]</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 text-center opacity-30 text-xs">
        <p>© 2026 SHIBILI_AMAN_TK. ALL_SYSTEMS_OPERATIONAL.</p>
        <p className="mt-2">BUILT_WITH_NEXT_JS_&_GSAP</p>
      </footer>
    </main>
  );
}