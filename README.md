# Prisma Studio

A dark, cinematic landing page for **Prisma** — a worldwide network of visual artists, filmmakers, and storytellers.

## Tech Stack

- **React 18** + **Vite** + **TypeScript**
- **Tailwind CSS 3** — custom `primary` color `#DEDBC8` and `font-serif` (Instrument Serif)
- **Framer Motion** — pull-up text animations, scroll-linked character reveal, staggered card entrances
- **Lucide React** — `ArrowRight`, `Check` icons

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport video background, floating pill navbar, giant `Prisma` heading with pull-up animation, CTA button |
| **About** | Dark card with multi-style heading (Almarai + Instrument Serif italic), scroll-linked letter opacity animation |
| **Features** | 4-column grid: video card + 3 feature info cards with staggered entrance animations |

## Fonts

- **Almarai** (300, 400, 700, 800) — global default
- **Instrument Serif** (italic) — italic accent text in About section

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `primary` (Tailwind) | `#DEDBC8` | Utility classes (`text-primary`) |
| Primary (inline) | `#E1E0CC` | Headings, key text |
| Card bg (About) | `#101010` | About inner card |
| Card bg (Features) | `#212121` | Feature info cards |
| Background | `#000000` | Global |
