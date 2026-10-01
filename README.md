# Hilal Habeeb — Portfolio

React + TypeScript portfolio with Vite and Framer Motion.

## Run

```sh
npm ci
npm run dev
```

Validation: `npm run build` and `npx tsc --noEmit`.

## Pages

- Home: `#about`
- Project collection: `#/projects`
- Project details: `#/projects/<slug>`
- Beyond Bahrain: `#/beyond-bahrain`
- Episode 001: `#/beyond-bahrain/001`

Hash routes support static hosting without rewrite configuration. Browser back/forward and direct links are supported. Project descriptions retain the original portfolio scope without invented impact metrics. Edit `projectDetails.ts` for detail content, engineering sources and the WTC live URL; edit `constants.tsx` for profile data.

Beyond Bahrain uses an original CSS illustration, labeled as an illustration. The WTC case study stack and assumptions were checked against the project's README, package file and reference notes. It links the building operator, Ramboll/Norwin, Otis and Open-Meteo. It does not publish the private WTC source repository.

## Rollback

Before this refresh, `main` pointed to `b70ac0b10c841d419fc3418b3ae48c8e42bb4a8c`.
The remote branch `backup/portfolio-before-refresh-2026-10-01` preserves that exact commit. To undo the refresh after merging, revert the refresh commit/PR on `main`; the backup branch provides the original source for comparison or redeployment.
