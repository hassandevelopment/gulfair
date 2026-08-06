# Psych Drill

A personal drill app for Gulf Air style psychometric exam practice. Static single-page app, no backend, progress lives in your browser's localStorage.

Live URL after deploy: https://hassandevelopment.github.io/gulfair/

## Run locally

```
npm install
npm run dev
```

Open the printed localhost URL. Production check:

```
npm run build
npm run preview
```

## One-time GitHub Pages setup

1. Create the repo https://github.com/hassandevelopment/gulfair (the name must be exactly `gulfair`).
2. Push this project to `main`.
3. On GitHub: Settings, then Pages, then set Source to "Deploy from a branch" and pick `gh-pages` (root).
4. Every push to `main` now builds and pushes `dist` to the `gh-pages` branch automatically via `.github/workflows/deploy.yml`.

## Repo name must match the base path

`vite.config.js` contains `base: '/gulfair/'`. This must match the repo name exactly, or the deployed site loads a blank white page because every asset 404s. If you ever rename the repo, change `base` to `'/<new-name>/'` in the same commit.

## Verbal bank audit

The verbal question bank is data, so a wrong answer key is possible. `VERBAL_REVIEW.md` lists every item with its options, marked answer, and the rule that justifies it. Regenerate it after editing the bank:

```
npm run verbal-review
```

## Sanity checks

```
npm run sanity
```

Runs every generator thousands of times and asserts clean answers, four unique options, and a correct answer at the marked index.
