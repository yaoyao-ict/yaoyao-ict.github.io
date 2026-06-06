# YaoYao Personal Website

This is YaoYao's personal website, built with Astro and published with GitHub Pages.

Live site:

```text
https://yaoyao-ict.github.io/
```

GitHub repository:

```text
https://github.com/yaoyao-ict/yaoyao-ict.github.io
```

## Quick Start

```powershell
npm install
npm run dev
```

Local preview:

```text
http://127.0.0.1:4321/
```

Build:

```powershell
npm run build
```

The generated static site is written to:

```text
dist/
```

## Project Structure

```text
src/
  components/     Reusable UI components
  data/           Navigation, cards, and collection data
  layouts/        Shared page layouts
  pages/          Astro routes
  styles/         Global design system and styles
public/
  assets/         Static image assets
  scripts/        Browser scripts for language, theme, and menu behavior
```

## Current Information Architecture

```text
/
/projects/
/projects/automation/
/projects/automation/workflow-automation/
/projects/automation/api-handoff-checklist/
/projects/data/
/projects/data/smart-dashboard/
/projects/data/metrics-review/
/writing/
/writing/deployment/
/writing/deployment/personal-website/
/writing/deployment/github-pages/
/writing/career/
/writing/career/project-stories/
/writing/career/portfolio-evidence/
/about/
/about/yaoyao/
/contact/
```

## Publishing

GitHub Pages serves the `gh-pages` branch.

The source code lives on `main`. After changes are merged to `main`, the site should be built and published to `gh-pages`.

See [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md) and [WORKFLOW.md](./WORKFLOW.md) before starting future work.
