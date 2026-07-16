# Changelog

All notable changes to the Shibili Aman portfolio project will be documented here.

## [2.0.0] - 2026-07-16

### Added
- Integrated `matter-js` engine into a new custom [PhysicsCanvas.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/PhysicsCanvas.tsx) component. Skill tags fall with gravity, collide, and support mouse drag fings.
- Implemented double wireframe geometry in [Canvas3D.tsx](file:///home/LordSA/portfolio/shibiliaman/src/components/Canvas3D.tsx), featuring a Cyan Torus Knot wrapping a Gold Octahedron mesh.

### Changed
- Overhauled visual styling to **Peak Neo-Brutalism**:
  - Main colors set to pitch black background, neon cyan borders, and gold accents.
  - Border thickness set to `3px` and `4px` solid outlines.
  - Offsets configured with unblurred solid shadows.
- Redesigned pages and templates:
  - [Navbar.astro](file:///home/LordSA/portfolio/shibiliaman/src/components/Navbar.astro) redesigned as a full-width dashboard console with border grids.
  - [Footer.astro](file:///home/LordSA/portfolio/shibiliaman/src/components/Footer.astro) restructured into a 3-column ledger layout.
  - [Portfolio.astro](file:///home/LordSA/portfolio/shibiliaman/src/components/Portfolio.astro) hero redesigned as an asymmetrical column split grid. Embeds the skills physics canvas and tab-index project cards.
  - [contact.astro](file:///home/LordSA/portfolio/shibiliaman/src/pages/contact.astro) redesigned as folder cards in a desktop directory.
  - [experience.astro](file:///home/LordSA/portfolio/shibiliaman/src/pages/experience.astro) timeline rebuilt as a Git tree repository schema.
  - [projects.astro](file:///home/LordSA/portfolio/shibiliaman/src/pages/projects.astro) rebuilt as a structured terminal list database table.
  - [[slug].astro](file:///home/LordSA/portfolio/shibiliaman/src/pages/project/[slug].astro) redesigned as an engineering blueprint layout.
- Upgraded packages for `react`, `react-dom`, `@tailwindcss/vite`, and `lenis`.
