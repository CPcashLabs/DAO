# CPcashLabs DAO Docs

This repository contains a GitHub Pages + Jekyll documentation site for the **CPcashLabs brand ecosystem**.

The site is currently organized around two core modules:

- `roadmap`: strategic direction, ecosystem context, and roadmap whitepaper
- `recruiting`: contributor roles, recruiting flow, and joining guidance

The visual foundation uses the official [Minimal theme](https://pages-themes.github.io/minimal/), with a small amount of custom styling to fit the multilingual documentation structure.

## Languages

- English (default, `/`)
- Simplified Chinese for Singapore (`/zh-sg/`)
- Russian (`/ru/`)

## Local development

```bash
bundle install
bundle exec jekyll serve
```

The default local preview address is `http://127.0.0.1:4000`.

Ruby `3.3.x` and a recent Bundler version are recommended for local development. Deployment is handled by the GitHub Actions workflow included in this repository.

## Project structure

- `index.md`: English home page
- `roadmap/`: English roadmap module
- `recruiting/`: English recruiting module
- `zh-sg/roadmap/`: Simplified Chinese roadmap module
- `zh-sg/recruiting/`: Simplified Chinese recruiting module
- `ru/roadmap/`: Russian roadmap module
- `ru/recruiting/`: Russian recruiting module
- `_layouts/page.html`: shared page wrapper for the Minimal theme
- `assets/css/style.scss`: Minimal theme overrides for multilingual docs
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
