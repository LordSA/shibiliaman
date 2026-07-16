# Changelog

All notable changes to the Shibili Aman portfolio project will be documented here.

## [1.0.0] - 2026-07-16

### Added
- Created `agents.md` in root and `.agents/AGENTS.md` specifying strict requirements for workspace code formatting and comments cleaning.
- Created `project_memory.md` documenting tech stack integrations, site routing, and AI indexing.
- Created `design.md` detailing visual tokens, luxury brutalism theme color variables, fonts, and active screen frame designs.
- Created `changelogs.md` to log changes.
- Created new `MovingFrame.astro` component to manage screen border animations and scrolling news-ticker dynamically.

### Fixed
- Fixed `GET /contact` Status 500 runtime error on Vercel by converting `/contact` from server-side rendering (SSR) to a fully static prerendered page (removed `export const prerender = false`).
- Added WhatsApp connection link (`wa.me/919037619447`) within the contact points directory.

### Changed
- Redesigned site layout from dark-minimal to **Luxury Brutalism**:
  - Implemented Gold (`#C5A059`) and Ivory (`#FAF9F6`) color theme.
  - Set up solid borders, unblurred gold brutalist offset shadows, and sharp square components.
  - Swapped default default styles for styled `Cinzel` display headings and `JetBrains Mono` menus.
  - Overhauled home layout sections (Hero, About tech stack grids, Featured works catalog).
  - Redesigned career history timeline inside `experience.astro` with high contrast paths.
  - Cleaned up navigation bar styles and mobile bottom bar links.

### Removed
- Deleted unused stylesheets `src/styles/architect-theme.css` and `src/styles/time-traveler.css`.
