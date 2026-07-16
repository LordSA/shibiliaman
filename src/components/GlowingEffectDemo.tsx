import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { cn } from "../lib/utils";

export function GlowingEffectDemo() {
  return (
    <div className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold mb-3">Feature Framework</h2>
        <h3 className="text-3xl md:text-5xl font-bold font-sans tracking-tight text-white">System Architecture Capabilities</h3>
      </div>
      <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-[#c5a059]" />}
          title="Optimal System Design"
          description="Developing structured and modular layout designs for maximum performance and clean aesthetics."
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Settings className="h-4 w-4 text-[#c5a059]" />}
          title="Developer Operations"
          description="Automating builds, managing task runs, and implementing high-speed asset parsing scripts."
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Lock className="h-4 w-4 text-[#c5a059]" />}
          title="Hardened Security Layers"
          description="Configuring server-side headers, request validators, session managers, and custom routing blocks."
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Sparkles className="h-4 w-4 text-[#c5a059]" />}
          title="Interactive Magic"
          description="Leveraging physical constraints, 3D orbits, and scroll transform matrices to bring interfaces to life."
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Search className="h-4 w-4 text-[#c5a059]" />}
          title="AI Search Readiness"
          description="Exposing links, schema structures, and agent configurations for advanced crawler parsing."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-zinc-800 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1.5}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border border-zinc-800 bg-[#0a0a0c] p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-zinc-800 bg-zinc-900/50 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2 className="font-sans text-xs md:text-sm text-zinc-500 leading-relaxed">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
