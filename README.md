# Shibili Aman - Interactive Developer Portfolio

Welcome to the official portfolio codebase of Shibili Aman TK, a Full-Stack Developer and B.Tech CSE student. This site is built to showcase custom high-performance animations, interactive 3D physics orbits, and developer schemas.

---

## 🚀 Architectural Tech Stack

- **Web Framework**: [Astro v7.1.0](https://astro.build) (Static rendering, HTML first, and optimized bundle processing)
- **UI Architecture**: [React v19](https://react.dev)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (configured via `@tailwindcss/vite` within the Vite assembly)
- **Physics & Motion Rendering**:
  - **Framer Motion & Motion**: Drives the skew transitions and custom glowing borders.
  - **GSAP (GreenSock)**: Orchestrates text-scramble decoders, entrance slide animations, and 3D card tilt matrices.
  - **React Three Fiber (R3F) & Three.js**: Powers the 3D particle background and the Concentric Skills Orbit.
  - **Lenis**: Binds smooth, hardware-accelerated scrolling.
- **Static Assets & Metadata**:
  - `@astrojs/sitemap` automatically updates crawler-compatible indexes on build.
  - `@vercel/analytics/astro` exposes performance metrics.

---

## 💎 Interactive Animation Systems

### 1. 3D Concentric Orbit (`SkillsOrbit.tsx`)
- Displays core languages (C++, Python, JS, Java, Flutter, Figma) orbiting in 3D space on concentric paths.
- Embeds glassmorphic React elements in 3D space utilizing `<Html>` from `@react-three/drei`.
- Renders an interactive Gold progress line within each badge representing real-world proficiency levels (1-3).

### 2. Cursor-Tracking Glows (`glowing-effect.tsx`)
- Native pointer tracking computes distance parameters relative to grid cards.
- Animates custom multi-color gradient border highlights that dynamically follow hover vectors.
- Integrated natively on all featured project cards (homepage) and the comprehensive projects catalog database.

### 3. Flagship Scroll Showcase (`FlagshipShowcase.tsx`)
- Skews, scales, and rotates perspective grids on scroll using motion curves.
- Custom console interface showcasing the flagship platform **Resume Solutions**.

### 4. Interactive Background Swarm (`Canvas3D.tsx`)
- Render a mouse-interactive floating point cloud of particles that responds to cursor velocity and scroll offsets.

---

## 📂 Codebase Directory

```
├── .agents/               # Workspace specific agent rules
├── public/                # Static assets, robots, and LLM text files
├── src/
│   ├── assets/            # Static local media resources
│   ├── components/        # React & Astro layout components
│   │   ├── ui/            # UI components (glowing effects, scroll animation)
│   │   ├── Canvas3D.tsx   # R3F background particle swarm
│   │   ├── SkillsOrbit.tsx# 3D Concentric Skills Orbit system
│   │   └── FlagshipShowcase.tsx # Flagship perspective scroll showcase
│   ├── data/              # Projects, experience, and contact data lists
│   ├── layouts/           # Global parent templates and SEO structures
│   ├── pages/             # Dynamic file-based routing
│   └── styles/            # Tailwind css themes and global styles
├── README.md              # Technical overview documentation
├── package.json           # Lock files and script declarations
├── tailwind.config.js     # Tailwind style modifiers
└── tsconfig.json          # TypeScript configurations
```

---

## ⚙️ Local Development & Scripts

Ensure you have [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed locally.

### 1. Setup Dependencies
```bash
pnpm install
```

### 2. Spin Dev Server
```bash
pnpm dev
```

### 3. Build & Compile Static Pages
```bash
pnpm build
```

### 4. Run Diagnostics
```bash
pnpm astro check
```

---

## 🤖 SEO & Crawler Optimizations

- **Structured Schemas**: Google Person schemas are declared in `<head>` elements to verify index identity.
- **Sitemaps**: `sitemap-index.xml` is compiled dynamically on every build to guarantee search engine crawler coverage.
- **LLM Expose**: `llms.txt` exposes file maps and project stats directly to automated AI crawlers.
- **Zero Latency Serving**: The contact route has been optimized to compile statically, avoiding serverless cold starts.

---

Copyright © 2026 Shibili Aman TK.
All rights reserved.