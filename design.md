# Design System - Luxury Brutalism

This document outlines the visual system, typography, colors, layout rules, and component styles for the Shibili Aman portfolio.

## Aesthetic Theme: Luxury Brutalism

The design combines raw, blocky layout rules of Brutalism with luxurious colors, clean typography, and elegant, high-contrast layouts.

### Core Visual Tokens

1. **Colors**:
   - **Obsidian / Onyx Base (`#08080A`)**: Ultra-dark charcoal black background setting a premium tone.
   - **Gold Accent (`#C5A059` / `#DFBA73`)**: Warm metallic luxury gold used for outlines, active states, and focus headings.
   - **Rich Ivory (`#FAF9F6`)**: Bright off-white for primary readability without high eye strain.
   - **Emerald Green (`#00E676`)**: Vibrant neon green used exclusively for active system indicators, pulse lights, and verification states.
   - **Muted Sand (`#8A857A`)**: Charcoal-gold gray for details, captions, and secondary copy.

2. **Typography**:
   - **Luxury Serif**: `Cinzel` (Google Fonts) for display page titles, hero headers, and section names.
   - **Tech Monospace**: `JetBrains Mono` (Google Fonts) for navigation elements, stats, meta data, tags, and code blocks.
   - **Body Sans**: `Inter` (Google Fonts) for descriptions, achievements, and text blocks.

3. **Borders & Outlines**:
   - Outlines are flat, solid, and high-contrast: `2px solid #C5A059` or `1px solid rgba(197, 160, 89, 0.2)`.
   - Sharp 90-degree square corners: No rounded corners on brutalist panels (`rounded-none`).

4. **Shadows & Offsets**:
   - Shadows are unblurred, hard offsets: `shadow-[4px_4px_0px_#C5A059]` or `shadow-[6px_6px_0px_#08080A]`.
   - Hover movements shift cards and buttons up and left, compensating with a larger shadow offset.

---

## Moving Frame Overlay

A screen-wide custom border frame wraps the viewport:
- **Style**: Solid `1.5px` gold border lining the margins of the window.
- **Header Block**: Top-left contains dynamic system clock, route name, and latency signal ticker. Top-right holds navigation link callbacks.
- **Laser Dot**: A small neon emerald pulse dot travels continuously along the frame line paths.
- **Ticker Tape**: The bottom frame border integrates an infinite scrolling news-ticker layout with collaboration messages and active WhatsApp callouts.
