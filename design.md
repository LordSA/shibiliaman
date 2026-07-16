# Design System - Dark Minimalist & Integrated Widgets

This document outlines the visual system, colors, layout rules, and configurations for interactive widgets on the Shibili Aman portfolio.

## Aesthetic Theme: Dark Minimalist

The design utilizes a minimalist dark layout with subtle gradients, grayscale image filtering, and fine typographic rules.

### Core Visual Tokens

1. **Colors**:
   - **Main Background (`#050505`)**: Flat pitch dark background.
   - **Primary Text (`#FAFAFA`)**: Crisp off-white.
   - **Accent Gray (`#1A1A1A` / `#27272A`)**: Base border color and card background overlays.
   - **Tech Highlights (`#10B981` / Emerald)**: Tech proficiency indicator colors.

2. **Typography**:
   - **Sans Serif**: `Inter` (Google Fonts) for main copy, descriptions, titles, and headers.
   - **Monospace Text**: `JetBrains Mono` (Google Fonts) for navigation options, indicators, and metadata lines.

3. **Borders & Shadows**:
   - Outlines use thin boundaries (`border border-white/5` or `border border-white/10`).
   - Cards are styled with rounded corners (`rounded-2xl` / `rounded-3xl` or `rounded-full` for badges).
   - Drop shadows are smooth and blurred, leveraging black overlays: `shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]`.

---

## Interactivity Features

### 3D Canvas Background
- An interactive background rendering a floating point cloud of particles using React Three Fiber.
- Particle colors: Zinc-400 (`#A1A1AA`).
- Animates rotation based on mouse coordinate hover and page scroll offsets.

### 3D Concentric Orbit (SkillsOrbit)
- Skill nodes orbit on concentric circles in 3D space using React Three Fiber.
- Shows skill name and icon within a glassmorphism node.
- Renders a Gold progress bar inside each badge indicating proficiency levels (1 to 3).

### Perspective Scroll Flagship Showcase (FlagshipShowcase)
- Skews 3D rotation and scales down mockup blocks on page scroll using Framer Motion.
- Framed in a border (`#6C6C6C`) with a deep drop shadow.

### Hover Gradient Glow Card (GlowingEffect)
- Renders border gradient trails that follow pointer coordinates dynamically using Motion.
- Configures multi-color radial gradient blends.
- Integrated natively on all projects and career achievement grid cards.
