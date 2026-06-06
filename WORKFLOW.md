# Workflow

## Source of Truth

GitHub is the source of truth for this project:

```text
https://github.com/yaoyao-ict/yaoyao-ict.github.io
```

The PC local copy is a working checkout, not the only source of truth.

Local PC path:

```text
C:\Users\yaopc\Documents\Projects\personal-website
```

## Branches

Use:

- `main` for source code.
- `gh-pages` for built static output.
- Feature branches for larger or cloud/mobile initiated changes.

Recommended branch naming:

```text
codex/<short-task-name>
```

## PC Local Workflow

Before starting local work on the PC:

```powershell
git pull origin main
```

Then make changes, build, commit, and push:

```powershell
npm install
npm run build
git status
git add <files>
git commit -m "<clear message>"
git push origin main
```

If `npm run build` is blocked by Windows script execution, run Astro directly:

```powershell
& "C:\Program Files\nodejs\node.exe" node_modules\astro\bin\astro.mjs build
```

## Mobile or Cloud Chat Workflow

When working from a phone or a new cloud chat, the PC does not have to be running if the chat has GitHub write access.

Use this approach:

1. Read `PROJECT_CONTEXT.md` and `WORKFLOW.md`.
2. Inspect the repository.
3. Create a feature branch from `main`.
4. Make the code changes.
5. Build or run available checks.
6. Open a PR, or push to `main` only if the user explicitly wants direct changes.
7. Tell the user that the PC local checkout must run `git pull origin main` before the next local editing session.

This prevents the PC and GitHub copies from drifting silently.

## Keeping PC and GitHub Synchronized

If changes were made from mobile/cloud directly on GitHub, then the next PC session must start with:

```powershell
git pull origin main
```

If the local PC has uncommitted changes, check first:

```powershell
git status
```

Do not overwrite local uncommitted work. Commit it, stash it, or ask the user how to proceed.

## Publishing

GitHub Pages serves the generated site from the `gh-pages` branch.

The project has a GitHub Actions workflow in:

```text
.github/workflows/pages.yml
```

The workflow builds Astro and publishes `dist/` to `gh-pages`.

For immediate manual publishing from the PC after a successful build, publish the current `dist/` folder to `gh-pages`. Keep this separate from source code commits on `main`.

## Verification Checklist

Before finishing a code change:

- Run the Astro build.
- Check new routes return pages.
- Verify language switching if visible copy changed.
- Verify theme switching if header, hero, colors, or shared styles changed.
- Check mobile layout when navigation or page structure changes.
- Commit and push source changes.
- Confirm GitHub Pages deployment or manual `gh-pages` publish.

## Avoid

- Do not treat a long chat history as the only project memory.
- Do not make remote GitHub changes and then continue PC work without pulling first.
- Do not place all content on the homepage.
- Do not add new visible English-only text without a Chinese translation key.
- Do not edit generated `dist/` files as source code.
