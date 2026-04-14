# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: app.spec.ts >> Public Pages >> login: renders login form with email and password fields
- Location: e2e/app.spec.ts:77:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForFunction: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e6]:
  - generic [ref=e7]:
    - img [ref=e9]
    - heading "Welcome Back" [level=1] [ref=e12]
    - paragraph [ref=e13]: Sign in to your dashboard
  - generic [ref=e14]:
    - generic [ref=e15]:
      - generic [ref=e16]: Email
      - textbox "you@example.com" [ref=e17]
    - generic [ref=e18]:
      - generic [ref=e19]: Password
      - textbox "Enter your password" [ref=e20]
    - button "Sign In" [disabled] [ref=e21]
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE = 'http://localhost:4200';
  4   | 
  5   | async function waitForAngular(page) {
> 6   |   await page.waitForFunction(
      |              ^ Error: page.waitForFunction: Test timeout of 30000ms exceeded.
  7   |     () => {
  8   |       const root = document.querySelector('app-root');
  9   |       return root && root.textContent.trim().length > 100;
  10  |     },
  11  |     { timeout: 20000 }
  12  |   );
  13  | }
  14  | 
  15  | test.describe('Public Pages', () => {
  16  | 
  17  |   test('home: page loads, hero visible, no console errors', async ({ page }) => {
  18  |     const errors: string[] = [];
  19  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  20  |     page.on('pageerror', (err) => errors.push(err.message));
  21  | 
  22  |     await page.goto(BASE, { waitUntil: 'networkidle' });
  23  |     await waitForAngular(page);
  24  | 
  25  |     await expect(page.locator('h1')).toContainText('Software Engineer', { timeout: 10000 });
  26  |     await expect(page.locator('text=View Projects')).toBeVisible();
  27  |     await expect(page.locator('text=Contact Me')).toBeVisible();
  28  |     expect(errors).toHaveLength(0);
  29  |   });
  30  | 
  31  |   test('about: page loads, bio visible, no console errors', async ({ page }) => {
  32  |     const errors: string[] = [];
  33  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  34  |     page.on('pageerror', (err) => errors.push(err.message));
  35  | 
  36  |     await page.goto(`${BASE}/about`, { waitUntil: 'networkidle' });
  37  |     await waitForAngular(page);
  38  | 
  39  |     await expect(page.locator('h1')).toContainText('Kurhula', { timeout: 10000 });
  40  |     await expect(page.locator('text=About Me').first()).toBeVisible();
  41  |     expect(errors).toHaveLength(0);
  42  |   });
  43  | 
  44  |   test('projects: renders project cards, tab navigation works', async ({ page }) => {
  45  |     const errors: string[] = [];
  46  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  47  |     page.on('pageerror', (err) => errors.push(err.message));
  48  | 
  49  |     await page.goto(`${BASE}/projects`, { waitUntil: 'networkidle' });
  50  |     await waitForAngular(page);
  51  | 
  52  |     await expect(page.locator('h1')).toContainText('Projects', { timeout: 10000 });
  53  |     await expect(page.locator('text=View Projects').first()).toBeVisible();
  54  |     expect(errors).toHaveLength(0);
  55  |   });
  56  | 
  57  |   test('contact: form renders, validation works', async ({ page }) => {
  58  |     const errors: string[] = [];
  59  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  60  |     page.on('pageerror', (err) => errors.push(err.message));
  61  | 
  62  |     await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle' });
  63  |     await waitForAngular(page);
  64  | 
  65  |     await expect(page.locator('h1')).toContainText('Work Together', { timeout: 10000 });
  66  |     const nameInput = page.locator('input[id="name"]');
  67  |     const emailInput = page.locator('input[id="email"]');
  68  |     const submitBtn = page.locator('button[type="submit"]');
  69  | 
  70  |     await expect(nameInput).toBeVisible();
  71  |     await expect(emailInput).toBeVisible();
  72  |     await expect(submitBtn).toBeVisible();
  73  |     await expect(page.locator('text=Name is required').first()).toBeVisible();
  74  |     expect(errors).toHaveLength(0);
  75  |   });
  76  | 
  77  |   test('login: renders login form with email and password fields', async ({ page }) => {
  78  |     const errors: string[] = [];
  79  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  80  |     page.on('pageerror', (err) => errors.push(err.message));
  81  | 
  82  |     await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  83  |     await waitForAngular(page);
  84  | 
  85  |     await expect(page.locator('h1')).toContainText('Welcome Back', { timeout: 10000 });
  86  |     await expect(page.locator('input[type="email"]')).toBeVisible();
  87  |     await expect(page.locator('input[type="password"]')).toBeVisible();
  88  |     await expect(page.locator('button[type="submit"]')).toBeVisible();
  89  |     expect(errors).toHaveLength(0);
  90  |   });
  91  | 
  92  |   test('stack: renders technical stack page', async ({ page }) => {
  93  |     const errors: string[] = [];
  94  |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  95  |     page.on('pageerror', (err) => errors.push(err.message));
  96  | 
  97  |     await page.goto(`${BASE}/stack`, { waitUntil: 'networkidle' });
  98  |     await waitForAngular(page);
  99  | 
  100 |     await expect(page.locator('h1')).toContainText('Technical Stack', { timeout: 10000 });
  101 |     expect(errors).toHaveLength(0);
  102 |   });
  103 | 
  104 |   test('philosophy: renders design philosophy page', async ({ page }) => {
  105 |     const errors: string[] = [];
  106 |     page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
```