# Design System - Peak Neo-Brutalism

This document outlines the visual system, typography, colors, layout rules, and component styles for the Shibili Aman portfolio redesign.

## Aesthetic Theme: Peak Neo-Brutalism

Peak Neo-Brutalist design features high-contrast visual structures, thick outlines, flat shapes, unblurred shadows, and structural layouts separated by solid black borders.

### Core Visual Tokens

1. **Colors**:
   - **Obsidian Black (`#000000`)**: Deep solid background coloring.
   - **Neon Cyan (`#00FFD1`)**: Vibrant cyan used for active structural boundaries, links, focus tags, and main outlines.
   - **Cyber Gold (`#C5A059`)**: Muted metallic gold used for auxiliary accents, cards, and warning flags.
   - **Carbon Card (`#101114`)**: Dark grey background for container divs.
   - **Pure White (`#FFFFFF`)**: Primary typography reading color.

2. **Typography**:
   - **Display Heading**: `Cinzel` (Google Fonts) for main hero titles, page tags, and section callouts.
   - **Monospace Text**: `JetBrains Mono` (Google Fonts) for console logs, directory rows, menus, and labels.
   - **Sans Serif**: `Inter` (Google Fonts) for descriptions, block paragraphs, and details.

3. **Borders & Outlines**:
   - Grid dividers and layouts are bordered by solid `3px` to `4px` Cyan boundaries (`border-3 border-[#00ffd1]`).
   - Sharp 90-degree square corners (`rounded-none`) are applied to all panels and elements.

4. **Drop Shadows**:
   - Solid unblurred shadows represent the primary depth layer: `shadow-[8px_8px_0px_#000000]` or `shadow-[8px_8px_0px_#c5a059]`.
   - Hover states animate elements by shifting them up/left, increasing the shadow offset.

---

## Interactivity Features

### 3D rotating Wireframe
- A rotating dual-wireframe system is fixed to the background.
- An outer Cyan Torus Knot spins along its axes, wrapping an inner Gold Octahedron.
- Scales and shifts on mouse motion and page scroll.

### Draggable Physics Canvas
- A dynamic skills sandbox powered by `matter-js`.
- Renders tags as rectangular boxes colliding and falling under gravity.
- Interactive drag constraints let visitors throw skill boxes inside borders.
