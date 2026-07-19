# Changelog

All notable changes to the Shibili Aman portfolio project will be documented here.

## [3.2.1] - 2026-07-19

### Fixed
- Resolved button rendering on project details pages (`src/pages/project/[slug].astro`). The system now dynamically parses `project.link` to display appropriate "Source Code" or "Live Build"/"View Project" buttons if specific `github` or `live` properties are absent.
- Customized LinkedIn external buttons to dynamically display "View Project" instead of generic "Live Build" text.

## [3.2.0] - 2026-07-16

### Added
- Integrated cursor-tracking `GlowingEffect` border highlight natively inside all project cards (featured grids in `Portfolio.astro` and comprehensive database lists in `projects.astro`).
- Integrated `GlowingEffect` cards on all timeline achievement blocks inside `experience.astro`.
- Created custom flagship platform mockup component [FlagshipShowcase.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/FlagshipShowcase.tsx) using `ContainerScroll`.
- Mounted the flagship showcase directly before the contact form on the home page.
- Added Instagram connection channel to contact list details in [contact.ts](file:///home/LordSA/portfolio/shibiliaman/src/data/contact.ts).

### Removed
- Removed the standalone isolated demo files `HeroScrollDemo.tsx` and `GlowingEffectDemo.tsx`.

### Changed
- Overhauled [README.md](file:///home/LordSA/portfolio/shibiliaman/README.md) to serve as a detailed developer reference for the codebase, dependencies, build settings, and animation mechanics.
- Standardized image dimensions on dynamic project slug pages to widescreen `aspect-video` (16:9 ratio).
- Refined back button stacking context using `relative z-30` and `data-astro-reload` to bypass client router blocks.
- Transitioned Vercel Analytics setup to the client side to avoid static compile headers warnings.
