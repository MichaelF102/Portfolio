# Personal Project Portfolio

Personal portfolio site built with React 18, Vite, styled-components, and Framer Motion. Deployed using Netlify.

**Live site:** https://michaelfernandes.netlify.app/

## Stack

- [Vite](https://vitejs.dev/) — dev server and production build
- [React 18](https://react.dev/) + [React Router 6](https://reactrouter.com/)
- [styled-components](https://styled-components.com/) — theming and layout
- [Framer Motion](https://www.framer.com/motion/) — page transitions and UI motion
- [@tsparticles/react](https://particles.js.org/) — background particles
- [Vitest](https://vitest.dev/) + Testing Library — unit tests

## Prerequisites

- Node.js 18+ (20+ recommended)
- npm 9+

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` / `npm start` | Start dev server at [http://localhost:5173](http://localhost:5173) |
| `npm run build` | Production build to `dist/` (base path `/Portfolioo/` for GitHub Pages) |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run tests once |
| `npm run test:watch` | Run tests in watch mode |
| `npm run deploy` | Build and publish `dist/` to `gh-pages` branch |

## Local development

```bash
npm install
npm run dev
```

Open the URL printed in the terminal. Routes use `HashRouter`, so paths look like `/#/about`.

## GitHub Pages

The app is configured for project-site hosting:

- `homepage` in `package.json` and `base: '/Portfolioo/'` in `vite.config.js` must match your repo name.
- `HashRouter` avoids server-side routing issues on static hosting.
- Deploy with `npm run deploy` (requires `gh-pages` and write access to the remote).

If you fork to a different repo or user, update both `homepage` and `vite.config.js` `base`.

## Project structure

```
src/
  components/     # Pages and page-level UI
  subComponents/  # Shared UI (nav, particles, cards, …)
  config/         # tsparticles JSON configs
  assets/         # SVG and static assets
public/           # Files copied as-is to build output
```

## Tests

```bash
npm test
```

## License

Private portfolio project — see repository owner for usage terms.
