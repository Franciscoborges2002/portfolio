# My Portfolio

**Live at [fborges.dev](https://fborges.dev)**

Source code for my personal portfolio website, built with **Vite + React + TypeScript**. Showcases my projects, articles, books, experience, and skills.

---

## Features

- **Vite + React + TypeScript** — fast dev server and build toolchain
- **Tailwind CSS v4** — utility-first styling with dark/light/system theme support
- **shadcn/ui** — accessible component primitives built on Radix UI
- **React Router v7** — client-side routing (Home, Projects, Articles, Books)
- **react-i18next** — full i18n support in English, Portuguese, and Spanish
- **Markdown articles** — rendered via `react-markdown` with frontmatter parsing
- **ESLint v9** — flat config with TypeScript, React Hooks, and React Refresh rules
- **Docker** — containerised for self-hosted deployment
- **GitHub Actions CI** — lint, build, and dependency security scan on every push

## Getting Started

### Prerequisites

- Node.js v20+
- npm

### Installation

```bash
git clone https://github.com/Franciscoborges2002/portfolio.git
cd portfolio
npm install
```

### Running Locally

```bash
npm run dev
```

Navigate to `http://localhost:5173` — changes hot-reload automatically.

### Other Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Run project in development mode                  |
| `npm run build`        | Type-check and build for production              |
| `npm run preview`      | Preview the production build locally             |
| `npm run lint`         | Run ESLint across the project                    |
| `npm run format`       | Run Prettier across the project                  |
| `npm run format:check` | Verify Prettier verifications across the project |

## Project Structure

```
src/
├── components/       # Reusable UI components (Header, BookCard, MarkdownViewer, …)
├── data/             # Static data — projects, books, articles (Markdown)
├── i18n/             # react-i18next config and locale JSON files (en, pt, es)
├── lib/              # Utilities (article parsing, helpers)
├── pages/            # Route-level page components
└── index.css         # Global styles and Tailwind theme tokens
```

## Deployment

The project is containerised with Docker and deployed via **Coolify** at [fborges.dev](https://fborges.dev).

### Docker

The image uses a two-stage build:

1. **Builder** — `node:24-alpine` installs dependencies and runs `npm run build`
2. **Runner** — `nginx:1.27-alpine` serves the static `dist/` output on port `8080`, with `try_files` configured for client-side routing

```bash
docker build -t portfolio .
docker run -p 8080:8080 portfolio
```

### CI/CD — GitHub Actions

The pipeline runs on every push to `main`:

1. **Install** — caches `node_modules` keyed on `package-lock.json`
2. **Lint** — ESLint check
3. **Build** — Vite production build, artifact uploaded
4. **Security scan** — `npm audit` + Trivy filesystem scan
5. **Run Dockle** — run `dockle` command on docker image

## Configuration

- Content lives in `src/data/` — edit `projects.ts`, `books.ts`, and the Markdown files under `data/articles/`
- Translations are in `src/i18n/locales/{en,pt,es}.json`
- Theme tokens are defined in `src/index.css`
- ESLint rules are in `eslint.config.js`

## License

Released under the [MIT License](./LICENSE).
