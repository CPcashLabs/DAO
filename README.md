# CPcashLabs DAO Docs

This repository contains a GitHub Pages + Jekyll documentation site for the **CPcashLabs brand ecosystem**.

The site currently focuses on **recruiting and community building**, while also establishing the broader narrative for the CPcashLabs ecosystem.

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
- `ecosystem.md`: English ecosystem overview
- `vision.md`: English project vision
- `community-volunteer.md`: English community volunteer page
- `web3-community-business-expert.md`: English Web3 community business expert page
- `join-us.md`: English join page
- `zh-sg/`: Simplified Chinese (Singapore) pages
- `ru/`: Russian pages
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
