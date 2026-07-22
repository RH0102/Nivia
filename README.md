# Flexra — Physiotherapy & Recovery Care (Demo)

A React + TypeScript recreation of the Flexra physiotherapy landing page design, built with Vite and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/App.tsx` – assembles all page sections
- `src/components/` – Navbar, Hero, About, Treatments, CareSupport, Programs, Testimonials, FAQ, Footer
- `src/index.css` – design tokens, fonts (Fraunces + Jost), and Tailwind layers
- `tailwind.config.js` – custom teal/cream color palette and font families

## Notes

Photography in the original design has been recreated as styled gradient placeholder blocks (`PhotoBlock` component) since real stock photos weren't available in this environment — swap in real images by replacing the `PhotoBlock` usages with `<img>` tags pointing at your own assets.
