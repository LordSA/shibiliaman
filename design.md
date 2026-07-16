# Design System - Dark Minimalist

This document outlines the visual system, typography, colors, layout rules, and component styles for the Shibili Aman portfolio.

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
