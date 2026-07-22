# Garret Ritchie Portfolio

Garret Ritchie's portfolio and personal site, built as a standard Vite + React
single-page application with TypeScript, React Router, and Tailwind CSS.

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Project Structure

- `src/main.tsx` mounts the React application.
- `src/App.tsx` defines client-side routes.
- `src/pages/` contains route components.
- `src/components.tsx` contains shared navigation and footer components.
- `src/site-content.ts` contains typed portfolio content.
- `src/index.css` contains global styling and theme definitions.
- `public/` contains static images and icons.

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: type-check and create the production build in `dist/`
- `npm run preview`: preview the production build
- `npm run lint`: run ESLint
- `npm test`: build and server-render the main routes for verification

Netlify is configured to serve `dist/` and route browser requests back to
`index.html`, allowing direct visits to React Router paths.
