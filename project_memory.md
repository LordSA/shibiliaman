# Project Memory - Shibili Aman Portfolio

This document tracks the codebase architecture, file structures, configuration schemas, and design constraints of the Shibili Aman portfolio.

## Tech Stack & Architecture

- **Framework**: [Astro v7.1.0](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (integrated via `@tailwindcss/vite` plugin in Vite config)
- **Interactive Layers**: 
  - [React v19](https://react.dev)
  - [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) for the 3D particle background in `Canvas3D.tsx`.
  - [GSAP (GreenSock)](https://gsap.com) for scroll-triggered page entrance transitions, text scramble animations, and tilt effects.
  - [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling.
- **Hosting Adapter**: `@astrojs/vercel` (Static generation with target platform optimizations)
- **SEO & Search**:
  - `@astrojs/sitemap` for auto-generating XML sitemaps
  - `@vercel/analytics/astro` for web vitals monitoring

---

## File Structure & Routing

- `src/layouts/Layout.astro`: Parent layout wrapper containing global SEO meta tags, Google Fonts imports, structured schema JSON-LD, and smooth scroll initializer.
- `src/styles/global.css`: Core design stylesheet containing Tailwind v4 imports, global font overrides, and dark color tokens.
- `src/components/`:
  - `Canvas3D.tsx`: React Three Fiber component rendering a mouse-interactive floating particle swarm.
  - `Navbar.astro` & `Footer.astro`: Navigation menu elements with responsive layouts.
  - `Portfolio.astro`: Standard home landing layout grouping the hero, about bio, tech arsenal, and featured work cards.
- `src/pages/`:
  - `index.astro`: Main page route (static).
  - `contact.astro`: Contact links and WhatsApp connection (static).
  - `experience.astro`: History of positions and achievements.
  - `projects.astro`: Full catalog listing of projects.
  - `project/[slug].astro`: Dynamic path detail pages for individual projects.
- `src/data/`:
  - `contact.ts`: Contains list of social media channels and user handles.
  - `experience.ts`: Details corporate and community roles held.
  - `projects.ts`: Complete data listing for the 14 portfolio projects.
