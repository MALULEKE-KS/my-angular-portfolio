# AGENTS.md

## Cursor Cloud specific instructions

This is an **Angular 21 portfolio SPA** (single-page application) using Tailwind CSS. The backend (FastAPI) is **not** in this repository — public pages work fully without it.

### Quick reference

| Action | Command |
|---|---|
| Install deps | `npm install` |
| Dev server | `npm run start` (serves on `http://localhost:4200`) |
| Build | `npm run build` |
| Unit tests | `npm test` (Karma + ChromeHeadless, 9 specs) |
| E2E tests | `npm run e2e` (Playwright, 36 specs across 4 viewports) |

### Non-obvious notes

- **Playwright requires both Chromium and WebKit browsers.** The E2E config uses iPhone device profiles (WebKit) for mobile viewports and Desktop Chrome (Chromium) for desktop. Run `npx playwright install --with-deps chromium webkit` if browsers are missing.
- **The dev server binds to `0.0.0.0:4200`** (`--host 0.0.0.0`) so it's accessible from any interface, not just localhost.
- **No lint script is defined in `package.json`.** There is no ESLint or standalone lint configuration in this repo.
- **E2E tests expect the dev server running on port 4200.** Playwright config includes `webServer` that auto-starts `npm run start`, but if the server is already running it will reuse it (`reuseExistingServer: true` outside CI).
- **The `angular.json` serve config has `allowedHosts`** for specific proxy domains. This doesn't affect local dev but is relevant if you see host-header rejections.
- **Dashboard/auth/contact-submit features require the external FastAPI backend** on `http://localhost:8000/api/v1`. Public pages (Home, About, Projects, Stack, Philosophy) render with static/hardcoded data and work without it.
