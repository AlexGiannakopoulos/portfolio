# Alexandros-Nektarios Giannakopoulos — Industrial Skeuomorphism Portfolio & CV

[![Deploy to GitHub Pages](https://github.com/AlexGiannakopoulos/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/AlexGiannakopoulos/portfolio/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue.svg)](https://AlexGiannakopoulos.github.io/portfolio/)

A high-performance personal portfolio and interactive CV for **Alexandros-Nektarios Giannakopoulos** (Data Scientist & Agentic AI Engineer at EY Greece, MSc Data Analytics Candidate), engineered with the **Industrial Skeuomorphism / Realism** design system.

---

## 🛠️ Design System & Aesthetic Highlights

- **Light Engine**: Top-left 45-degree directional illumination with tactile neumorphic dual-shadows.
- **Palette**:
  - `Chassis Base`: `#e0e5ec` (Matte ABS polymer feel)
  - `Raised Panels`: `#f0f2f5`
  - `Recessed Wells`: `#d1d9e6`
  - `Primary Ink`: `#2d3436` (Charcoal)
  - `Safety Orange / Braun Red`: `#ff4757` (Interactive triggers, emergency actuators, LED status)
  - `Dark Technical Plates`: `#283038`
- **Hardware Accents**:
  - 4-Corner machined screw heads (radial gradient fasteners at 12px offsets).
  - Recessed pill-shaped triple ventilation arrays.
  - Hardware LEDs with colored blooming glow and breathing pulse.
  - CRT screen scanlines and subtle plastic noise micro-texture overlay.
  - Mechanical spring-loaded button physics (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`).
- **Interactive Telemetry Console / Terminal**:
  - Live command execution (`help`, `whoami`, `skills`, `experience`, `metrics`, `education`, `contact`, `download-cv`, `clear`).
  - Live system diagnostics and multi-agent execution cycle simulator.

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
