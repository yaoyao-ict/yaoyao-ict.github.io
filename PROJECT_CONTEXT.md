# Project Context

## Project

This repository contains YaoYao's personal website.

Repository:

```text
https://github.com/yaoyao-ict/yaoyao-ict.github.io
```

Live site:

```text
https://yaoyao-ict.github.io/
```

Primary local PC path:

```text
C:\Users\yaopc\Documents\Projects\personal-website
```

## Purpose

The site is a personal website for YaoYao. It should present projects, writing, personal information, and contact details in a structured way.

The design direction is inspired by Josh Comeau's personal website:

```text
https://www.joshwcomeau.com/
```

Reference patterns already used:

- Top navigation with dropdown category menus.
- Second-level category pages, such as `/projects/data/`.
- Third-level detail pages, such as `/projects/data/smart-dashboard/`.
- A dedicated About category with personal information under `/about/yaoyao/`.
- Light/dark theme switching.
- English and Chinese language switching.

## Tech Stack

- Astro
- Static site output
- GitHub repository as source of truth
- GitHub Pages for hosting
- `main` branch for source code
- `gh-pages` branch for generated static output

## Important Files

```text
src/components/Header.astro
src/components/Footer.astro
src/components/CollectionList.astro
src/layouts/BaseLayout.astro
src/layouts/ArticleLayout.astro
src/data/navigation.js
src/styles/global.css
public/scripts/site.js
.github/workflows/pages.yml
```

## Current Site Structure

Top-level sections:

- Home: `/`
- Projects: `/projects/`
- Writing: `/writing/`
- About: `/about/`
- Contact: `/contact/`

Project categories:

- `/projects/automation/`
- `/projects/data/`

Writing categories:

- `/writing/deployment/`
- `/writing/career/`

About category:

- `/about/`
- `/about/yaoyao/`
- `/contact/`

## Design Notes

- Keep the homepage focused. Do not put every project or article on the homepage.
- Use category pages for grouped content.
- Use article/detail pages for deeper explanations.
- Keep navigation compact and readable.
- Menu items should use consistent icon + text styling.
- Similar controls should share behavior and visual patterns.
- Language and theme controls should remain consistent with the rest of the header.

## Language Notes

The site supports English and Chinese through `public/scripts/site.js`.

When adding visible text:

- Add a stable `data-i18n` key in the Astro markup.
- Add English and Chinese translations in `public/scripts/site.js`.
- Keep technical terms such as React, TypeScript, Python, Astro, GitHub Pages, Azure, API, and workflow in English when that reads more naturally.

## Future Chat Handoff Prompt

Use this prompt when starting a new chat, especially from mobile:

```text
I want to continue work on my personal website project.

Repository:
https://github.com/yaoyao-ict/yaoyao-ict.github.io

Live site:
https://yaoyao-ict.github.io/

Please read PROJECT_CONTEXT.md and WORKFLOW.md first, then inspect the repository before making changes.
Use GitHub as the source of truth. If you make changes remotely, use a branch or PR workflow, and remind me to run `git pull origin main` on my PC before I continue local work.
```
