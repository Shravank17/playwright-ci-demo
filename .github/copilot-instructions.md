<!-- Copilot / AI agent instructions for PlaywrightAutomation repo -->

# Purpose
Short, actionable guidance for AI coding agents working on this Playwright-based test repo.

# Big picture
- This repository contains end-to-end tests written for Playwright located under `tests/` (each file ends with `.spec.js`).
- Tests exercise a web client and API flows against rahulshettyacademy demo endpoints and manipulate local files (Excel) for data-driven scenarios.
- A lightweight helper lives at `tests/utils/APIUtils.js` providing `APIUtils(apiContext, loginPayload)` with `getToken()` and `createOrder()`.

# How tests are executed (concrete)
- Playwright configuration: see `playwright.config.js` (testDir=`./tests`, default browser=`chromium`, `headless:false`, `screenshot:on`, `trace:retain-on-failure`).
- There are no npm scripts defined in `package.json`; run tests with Playwright directly:

  - Run full suite: `npx playwright test`
  - Run a single file: `npx playwright test tests/uploaddownload.spec.js`
  - Show HTML report: `npx playwright show-report` or open the existing `playwright-report/index.html`.

# Project-specific patterns and gotchas
- Module style: `package.json` declares `type: "commonjs"` and most test files use `require()` (CommonJS). However `playwright.config.js` is written with ESM `import`/`export`; avoid changing the repo `type` without checking runtime implications.
- Test helpers: `tests/utils/APIUtils.js` expects a Playwright `request` context. It returns a `token` and `orderID` (currently assigned to globals inside the file). When modifying, preserve the returned `response` shape `{ token, orderID }` as other tests rely on it (see `tests/WebAPIPart1.spec.js`).
- Data files: some tests (e.g., `tests/uploaddownload.spec.js`) use `exceljs` to read/write local Excel files and reference absolute Windows download paths (e.g., `C:\Users\HP\Downloads\download (1).xlsx`). Be conservative when changing paths — these are user-specific fixtures.
- Auth injection pattern: tests set auth by calling `page.addInitScript(value => window.localStorage.setItem('token', value), response.token)` before navigating — preserve this approach when writing new tests that require authentication.
- Locators: tests commonly use `page.locator()` and `page.getByRole()` patterns; keep new tests consistent with these selectors.

# Files and places to inspect when making changes
- Test entrypoints: `tests/*.spec.js` (examples: `WebAPIPart1.spec.js`, `uploaddownload.spec.js`).
- Helpers: `tests/utils/APIUtils.js` (API flows) and any future helpers should follow its constructor signature.
- Config: `playwright.config.js` for runner settings and reporters.
- Artifacts: `playwright-report/` (HTML reports), `test-results/` (raw results), and `state.json` (repo state file used by scripts/tests).

# When editing or adding code
- Do not change the global module system (CommonJS vs ESM) without verifying Playwright config and Node runtime.
- Preserve existing API helper contracts and the shape of returned objects to avoid breaking tests that consume them.
- Keep platform-specific paths (Windows absolute paths) unchanged unless also updating test fixtures and CI configuration.

# Useful examples to follow (copy-edit-safe)
- Auth + API helper usage: `tests/WebAPIPart1.spec.js` — use `request.newContext()` + `new APIUtils(apiContext, loginPayload)`.
- Excel usage: `tests/uploaddownload.spec.js` — uses `exceljs` workbook read/write with worksheet cell lookup.

# Quick tasks agents can do safely
- Add npm scripts to `package.json` (e.g., `test:playwright` → `npx playwright test`) only after confirming expected developer workflow.
- Add new helper methods to `tests/utils/` following the `APIUtils` style; ensure tests continue to import via `require()`.

If any section is unclear or you want the file expanded with examples/line pointers, tell me which area to iterate on.
