# CPcashLabs DAO Docs

This repository now uses **Docusaurus + GitHub Actions** to publish the CPcashLabs DAO documentation site to GitHub Pages.

The documentation is organized around two core modules:

- `roadmap`: ecosystem direction, vision, and roadmap whitepaper
- `recruiting`: contributor roles, participation guidance, and current collaboration entry points

## Languages

- English (default)
- Simplified Chinese for Singapore (`zh-sg`)
- Russian (`ru`)

## Local development

```bash
npm install
npm start
```

The default local preview address is `http://localhost:3000/DAO/`.

## Production build

```bash
npm run build
```

The static output is generated in the `build/` directory.

## Project structure

- `docs/`: source documents for the default English locale
- `i18n/zh-sg/docusaurus-plugin-content-docs/current/`: Simplified Chinese translations
- `i18n/ru/docusaurus-plugin-content-docs/current/`: Russian translations
- `docusaurus.config.js`: site, i18n, theme, and deployment configuration
- `sidebars.js`: module-specific document sidebars
- `src/css/custom.css`: theme overrides for the documentation UI
- `.github/workflows/deploy-pages.yml`: GitHub Actions workflow for GitHub Pages deployment

## Deployment

Pushes to `main` trigger the GitHub Actions workflow and publish the built Docusaurus site to GitHub Pages.
