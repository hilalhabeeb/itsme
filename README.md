# Hilal Habeeb — Portfolio

React + TypeScript portfolio with Vite and Framer Motion.

## Run

```sh
npm ci
npm run dev
```

Validation: `npm run build` and `npm run typecheck`.

Tailwind CSS is compiled locally through PostCSS; the production site does not need the Tailwind CDN. The unused browser AI client and build-time API-key injection have been removed. No API key is needed for this portfolio.

## Pages

- Home: `#about`
- Project collection: `#/projects`
- Project details: `#/projects/<slug>`
- Beyond Bahrain: `#/beyond-bahrain`
- Episode 001: `#/beyond-bahrain/001`

Hash routes support static hosting without rewrite configuration. Browser back/forward and direct links are supported. Project descriptions retain the original portfolio scope without invented impact metrics. Edit `projectDetails.ts` for detail content, engineering sources and the WTC live URL; edit `constants.tsx` for profile data.

Beyond Bahrain uses the owner-provided screenshot of the actual WTC Energy Lab, compressed to WebP without changing its dimensions. The case study links to the full-size screenshot. The WTC case study stack and assumptions were checked against the project's README, package file and reference notes. It links the building operator, Ramboll/Norwin, Otis and Open-Meteo. It does not publish the private WTC source repository.

## Rollback

Before this refresh, `main` pointed to `b70ac0b10c841d419fc3418b3ae48c8e42bb4a8c`.
The remote branch `backup/portfolio-before-refresh-2026-10-01` preserves that exact commit. To undo the refresh after merging, revert the refresh commit/PR on `main`; the backup branch provides the original source for comparison or redeployment.

## Final polish verification

- Chromium review at desktop and mobile sizes, including 320, 390, 768 and 1440 px widths; no horizontal overflow on the reviewed routes.
- Project filters, browser Back, detail pages, skip link, full-size WTC image, mobile menu Escape/Contact behavior and unknown-route fallback checked.
- Axe WCAG 2 A/AA and WCAG 2.1 AA checks reported no violations on Home, Projects, Beyond Bahrain, WTC and mobile Home/Contact. Automated checks do not cover every accessibility requirement.
- No JavaScript page errors during the browser checks. Production dependency audit reported no known vulnerabilities.
- `backup/portfolio-before-final-polish-2026-10-01` preserves commit `284fe36cd951a620c88000838e57616d005ce486` before this pass.
