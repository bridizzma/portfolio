# Bridizzma Mishra Paudel — Security Portfolio

A premium, typography-led cybersecurity portfolio. Dark-mode only, single muted
indigo accent, restrained motion. Built to read like a product site, not a résumé.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Framer Motion (fade-ins, staggered reveals, subtle hover only)
- Lucide React (icons)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # typecheck + production build
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Experience, Projects, Investigations,
                 Skills, Certifications, Writing, Contact
    ui/          Container, Section, Reveal, Button, Tag (reusable primitives)
    visuals/     TelemetryBackground (subtle hero SVG)
  data/          All content lives here — edit these, not the components
  lib/           cn, motion presets, useScrollSpy
  index.css      Design tokens (@theme) + base styles
```

## Editing content

All copy is data-driven. Update the files in `src/data/` — `profile.ts`,
`experience.ts`, `projects.ts`, `investigations.ts`, `skills.ts`,
`certifications.ts`, and `writing.ts`. Drop a real `resume.pdf` into `public/`
and point `profile.links.resume` at it.

## Accessibility

Semantic landmarks, skip link, keyboard-focusable tabs for the Investigations
case files, `aria-current` nav state, and full `prefers-reduced-motion` support.
