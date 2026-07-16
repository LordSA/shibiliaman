# Changelog

All notable changes to the Shibili Aman portfolio project will be documented here.

## [3.0.0] - 2026-07-16

### Changed
- Reverted full website theme, layout, components, and scripts back to the original **Dark Minimalist** design system.
- Kept sitemaps, robots.txt optimizations, and updated dependency configurations.
- Retained WhatsApp direct linkage (`wa.me/919037619447`) in social contact options.

### Fixed
- Kept `/contact` statically prerendered (removed Vercel serverless `prerender = false` configuration), keeping the status 500 runtime error resolved.

### Removed
- Removed the newly added components `MovingFrame.astro` and `PhysicsCanvas.tsx`.
