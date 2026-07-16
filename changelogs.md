# Changelog

All notable changes to the Shibili Aman portfolio project will be documented here.

## [3.1.0] - 2026-07-16

### Added
- Integrated standard `cn` utility inside `src/lib/utils.ts` supporting Tailwind dynamic combinations.
- Installed NPM packages: `framer-motion`, `motion`, `clsx`, `tailwind-merge`, and `lucide-react`.
- Integrated Aceternity UI components: [container-scroll-animation.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/ui/container-scroll-animation.tsx) and [glowing-effect.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/ui/glowing-effect.tsx).
- Created [HeroScrollDemo.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/HeroScrollDemo.tsx) and [GlowingEffectDemo.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/GlowingEffectDemo.tsx) demo panels, mounting them at the bottom of the home layout.
- Created [SkillsOrbit.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/SkillsOrbit.tsx) using React Three Fiber to display C++, Python, JS, Java, Flutter, and Figma on rotating 3D orbits with progress bars.

### Changed
- Replaced the static skill tag badges on the homepage with the new interactive 3D `<SkillsOrbit client:idle />` component.
- Redesigned dynamic project pages [[slug].astro](file:///home/LordSA/portfolio/shibiliaman/src/pages/project/[slug].astro) with a premium layout, metadata grid, and showcases.
- Expanded [project_memory.md](file:///home/LordSA/portfolio/shibiliaman/project_memory.md) to document all 14 projects and 8 experience items in detail.
