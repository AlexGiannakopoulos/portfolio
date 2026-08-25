# Alexandros-Nektarios Giannakopoulos — Industrial Skeuomorphism Portfolio & CV

[![Deploy to GitHub Pages](https://github.com/AlexGiannakopoulos/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlexGiannakopoulos/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://AlexGiannakopoulos.github.io/portfolio/)

A personal portfolio and interactive CV of **Alexandros-Nektarios Giannakopoulos** (Data Scientist & Agentic AI Engineer at EY Greece, MSc Data Analytics Candidate).

---

## 🚀 Quick Start & Local Development

### Prerequisites
- Node.js (v18+ recommended)
- npm (v9+)

### Installation
```bash
# Install project dependencies
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
# Compile TypeScript and bundle static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 GitHub Pages Deployment

This project is configured for **zero-config GitHub Pages deployment**:
- `vite.config.ts` uses relative base paths (`base: './'`), so it works on either root user domains (`username.github.io`) or repository subpaths (`username.github.io/portfolio/`).
- Automated CI/CD workflow is included in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Enabling GitHub Pages on your repository:
1. Push this repository to GitHub: `git push -u origin main`
2. In your repository on GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will automatically build and publish the site.

---

## 📄 License & Attribution
Designed & Engineered by **Alexandros-Nektarios Giannakopoulos**. All rights reserved.
