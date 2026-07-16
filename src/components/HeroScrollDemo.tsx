import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden pb-32 pt-20">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl font-semibold text-zinc-500 dark:text-zinc-400">
              Unleash the power of <br />
              <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none text-white font-mono uppercase">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1400"
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
