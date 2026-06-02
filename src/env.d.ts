/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "gsap/ScrollTrigger" {
  export const ScrollTrigger: any;
  export default ScrollTrigger;
}

declare module "gsap" {
  export const gsap: any;
  export default gsap;
}
