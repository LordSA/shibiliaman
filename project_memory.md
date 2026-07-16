# Project Memory - Shibili Aman Portfolio

This document tracks the codebase architecture, file structures, configuration schemas, and design constraints of the Shibili Aman portfolio.

## Tech Stack & Architecture

- **Framework**: [Astro v7.1.0](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (integrated via `@tailwindcss/vite` plugin in Vite config)
- **Interactive Layers**: 
  - [React v19](https://react.dev)
  - [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) for the 3D Torus Knot wireframe in `Canvas3D.tsx`.
  - [Matter.js](https://brm.io/matter-js/) for the interactive gravity sandbox in `PhysicsCanvas.tsx`.
  - [GSAP (GreenSock)](https://gsap.com) for entrance animations.
  - [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling.
- **Hosting Adapter**: `@astrojs/vercel` (Static generation with target platform optimizations)
- **SEO & Search**:
  - `@astrojs/sitemap` for auto-generating XML sitemaps
  - `@vercel/analytics/astro` for web vitals monitoring

---

## File Structure & Routing

- `src/layouts/Layout.astro`: Parent layout wrapper containing global SEO meta tags, Google Fonts imports, structured schema JSON-LD, smooth scroll initializer, and the screen-wide frame overlay.
- `src/styles/global.css`: Core design stylesheet containing Tailwind v4 imports, global font overrides, and custom design tokens for Peak Neo-Brutalism.
- `src/components/`:
  - `Canvas3D.tsx`: React Three Fiber component rendering a rotating Torus Knot wrapping an Octahedron.
  - `PhysicsCanvas.tsx`: Matter.js physics engine simulating draggable tech tags.
  - `Navbar.astro` & `Footer.astro`: Navigation menu elements with responsive layouts and hover transformations.
  - `Portfolio.astro`: Standard home landing layout grouping the hero, about bio, tech arsenal, and project directories.
- `src/pages/`:
  - `index.astro`: Main page route (static).
  - `contact.astro`: Contact links and WhatsApp connection (static).
  - `experience.astro`: Timeline grid resembling a Git tree ledger.
  - `projects.astro`: Full catalog listing of projects as a repository spreadsheet.
  - `project/[slug].astro`: Dynamic path detail pages for individual projects.
- `src/data/`:
  - `contact.ts`: Contains list of social media channels and user handles.
  - `experience.ts`: Details corporate and community roles held.
  - `projects.ts`: Complete data listing for the 14 portfolio projects.
