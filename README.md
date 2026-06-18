# ARMINSOL Trading — React app

A React + Vite recreation of the Framer site at
`https://methodical-consistency-401478.framer.app/` (the "Nitro" portfolio
template, customized for **Arab Mining Solutions Trading EST.**).

Five pages with client-side routing: **Home, Products, About, Services, Contact**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Requires Node 18+.

## Fidelity — measured from the live site

The **homepage** was rebuilt against the live site's real rendered values,
captured element-by-element in a browser and verified against screenshots:

- **120px side gutters**, pure-black background, **Manrope** (headings/body) +
  **DM Mono** (labels, buttons, dates).
- **Hero H1** at 104px / weight 500 / letter-spacing -0.038em / line-height 1.2,
  wrapping to two lines like the original.
- **Working light/dark theme toggle** (the "Light mode" pill), persisted to
  localStorage — see `src/ThemeContext.jsx`.
- **Product categories** as a 5-card row (2026 / Product Category label, title,
  real product photo).
- **"Brands we carry"** as a 5-column logo grid with column divider lines and
  greyscale→full hover, not a marquee.
- **Services** rows reveal a thumbnail on hover; outlined buttons throughout
  (label + diagonal arrow), matching the live ones.
- Flame logo, nav pills, and single-row footer with social icons.

The other four pages (Products, About, Services, Contact) are faithful but were
not yet put through the same pixel-level measurement pass — that's the natural
next step.

### Quick look without installing

Open `preview.html` in a browser for a no-build, static-HTML render of the
homepage (uses the same `src/index.css`). The real app is the Vite project.

## Animations

Framer Motion handles scroll-triggered fade-up reveals, route transitions, the
scroll-aware navbar, and hover micro-interactions. The brands hover, services
thumbnail reveal, and theme transition are CSS. `prefers-reduced-motion` is
respected.

## Structure

```
src/
  main.jsx          # entry + ThemeProvider + BrowserRouter
  App.jsx           # routes + page transitions
  ThemeContext.jsx  # light/dark theme
  index.css         # design tokens (measured) + components
  data.js           # all content + image URLs
  components/  Navbar Footer CTA Reveal Arrow icons
  pages/       Home Products About Services Contact
```

## To productionize

- **Images** hot-link to `framerusercontent.com`. Download into `public/` and
  update URLs in `src/data.js`.
- **Contact form** has no backend — wire `onSubmit` in `pages/Contact.jsx`.
- **Colours/fonts** are CSS variables at the top of `src/index.css`
  (dark + light themes).

This is a faithful recreation, not Framer's exported code.
