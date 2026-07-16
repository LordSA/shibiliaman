# Project Memory - Shibili Aman Portfolio

This document contains a comprehensive record of the file schemas, tech stack integrations, sitemaps, data directories, projects, and career records in this repository.

## Tech Stack & Architecture

- **Framework**: [Astro v7.1.0](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (integrated via `@tailwindcss/vite` in Vite configuration)
- **UI Components**: [React v19](https://react.dev)
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/) / [Motion](https://motion.dev/) (used for Glowing Effect cards, scrolling containers, and keyframe transitions)
  - [GSAP (GreenSock)](https://gsap.com) (scroll-triggers, text scramble animations, and tilt features)
  - [Lenis](https://lenis.darkroom.engineering/) (scroll-smoothing)
- **3D Engines**:
  - [Three.js](https://threejs.org/) / [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) (interactive particle swarm in `Canvas3D.tsx` and concentric 3D Skills Orbit system in `SkillsOrbit.tsx`)
- **Hosting Adapter**: `@astrojs/vercel` (Static compilation with optimized caching)

---

## File Structure & Routing Map

- `src/lib/utils.ts`: Holds standard `cn` utility function combining `clsx` and `twMerge`.
- `src/layouts/Layout.astro`: Base wrapper loaded with global SEO metadata tags, OpenGraph structures, JSON-LD structured schemas, preconnected Google Fonts, CustomCursor handles, and smooth scroll bindings.
- `src/styles/global.css`: Central stylesheet declaring Tailwind directives, scrollbar designs, and custom typography variables.
- `src/components/`:
  - `Canvas3D.tsx`: Spins mouse-interactive particle swarms using R3F.
  - `SkillsOrbit.tsx`: R3F concentric circle orbit simulating skill nodes revolving with gold progress bars.
  - `HeroScrollDemo.tsx` & `GlowingEffectDemo.tsx`: Demonstration components wrapping interactive frames.
  - `Navbar.astro` & `Footer.astro`: Header and footer elements.
  - `Portfolio.astro`: Main page wrapper linking Hero, Bio, Tech Orbit, and Featured project grids.
- `src/components/ui/`:
  - `container-scroll-animation.tsx`: Component using `framer-motion` to skew perspective on page scroll.
  - `glowing-effect.tsx`: Component producing moving gradient highlights around card margins.
- `src/pages/`:
  - `index.astro`: Main portfolio homepage.
  - `contact.astro`: Contact links and WhatsApp connection (fully static prerendered).
  - `experience.astro`: Interactive grid log for historical milestones.
  - `projects.astro`: Full index catalog database.
  - `project/[slug].astro`: Dynamic slug routing details.
- `src/data/`:
  - `contact.ts`: Exports list of verified links and WhatsApp.
  - `experience.ts`: Details corporate and community roles.
  - `projects.ts`: Details all 14 project elements.

---

## Project Catalogue (14 Records)

### 1. Resume Solutions
- **Category**: AI / Utilities
- **Description**: ATS Resume Builder supporting AI generation and a detailed design panel.
- **Access**: https://resumesolutions.shibili.tech

### 2. Eren Yeager ADV
- **Category**: Python / Automation
- **Description**: High-performance Telegram bot for advance group management and instant movie searches.
- **GitHub**: github.com/LordSA/Eren-Yeager-ADV

### 3. ThinKForge
- **Category**: Web / Mini Project
- **Description**: Crowdfunding web platform built on core web technologies.
- **GitHub**: github.com/LordSA/ThinKForge

### 4. HealthMed
- **Category**: Web App / Mini Project
- **Description**: Secure Next.js medical assessment platform analyzing patient symptoms.
- **GitHub**: github.com/faraayshat/med_req
- **Live**: https://medreq.vercel.app

### 5. Oneman-Onevote
- **Category**: Security / TypeScript
- **Description**: Hardened voter verification system utilizing distinct IDs to block duplicate entries.
- **GitHub**: github.com/LordSA/Oneman-onevote

### 6. Fluffy
- **Category**: Discord / Automation
- **Description**: Discord task automation bot.
- **GitHub**: github.com/LordSA/Fluffy

### 7. Lullaby Down Below
- **Category**: Game / Java
- **Description**: Core Object-Oriented Java game module.
- **GitHub**: github.com/Muhsin-603/lullaby-down-below

### 8. Reclamation 1947
- **Category**: Game / Unity
- **Description**: Jam-built gameplay prototype created in Unity.
- **GitHub**: github.com/LordSA

### 9. Sudo Clean
- **Category**: Python / Declutter
- **Description**: Natural language automation utility decluttering directories.
- **GitHub**: github.com/LordSA/sudo-clean

### 10. Whats@CEV
- **Category**: AI / Management
- **Description**: AI event coordinator streamlining real-time event updates at CEV.
- **GitHub**: github.com/LordSA/event-manager
- **Live**: https://whatsatcev.shibili.tech

### 11. Sensaflora Online
- **Category**: E-commerce / Jewelry
- **Description**: E-commerce jewelry web platform.
- **Live**: https://sensaflora.shibili.tech

### 12. QR Generator
- **Category**: QR / Open Source
- **Description**: Free QR generation backend and interface.
- **GitHub**: github.com/LordSA/qr-generator
- **Live**: https://qr.shibili.tech

### 13. EasyGrip | Stride
- **Category**: 3D Printing / PenGrip
- **Description**: Affordable 3D printed pen grip designed for individuals with limited mobility.

### 14. GyroAid | Stride
- **Category**: Gyro / 3D Printing
- **Description**: Gyroscopic self-stabilizing spoon and plate for neurodivergent individuals.

---

## Experience Ledger (8 Records)

### 1. IEEE LINK - Design Lead
- **Period**: Mar 2026 - Present
- **Description**: Overseeing visual direction, event campaigns, and media outputs across chapter initiatives.

### 2. IEDC CEV - Community Lead & Design Co-Lead
- **Period**: Feb 2025 - Present (Community Lead since Apr 2026)
- **Description**: Scaled student startup connections and directed event graphics branding.

### 3. LucidPixl Designs - Co-Lead
- **Period**: Oct 2025 - Present
- **Description**: Leading branding and visual media projects for external clients.

### 4. TinkerHub CEV - Outreach Lead
- **Period**: Jul 2025 - Jun 2026
- **Description**: Expanded chapter presence via content campaigns and coordinate tech workshops.

### 5. CSI SB CEV - Design Lead
- **Period**: May 2025 - May 2026
- **Description**: Directed creative outputs and visual graphics for computer society activities.

### 6. Quasso Liberum XI - Designer
- **Period**: Nov 2025 - Feb 2026
- **Description**: Designed promotional materials and visual assets for the Quasso Liberum tech fest.

### 7. HCTMM Medtech - UI/UX Design Intern
- **Period**: Jun 2025 - Oct 2025
- **Description**: Researched wireframes, user testing metrics, and designed clinical portal layouts.

### 8. LetsUpgrade - Student Ambassador
- **Period**: Feb 2025 - Nov 2025
- **Description**: Directed community outreach workshops to help student developers upskill.
