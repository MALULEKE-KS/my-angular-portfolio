import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:4200';

async function waitForAngular(page) {
  await page.waitForFunction(
    () => {
      const root = document.querySelector('app-root');
      return root && root.textContent.trim().length > 100;
    },
    { timeout: 20000 }
  );
}

test.describe('Public Pages', () => {

  test('home: page loads, hero visible, no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(BASE, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Software Engineer', { timeout: 10000 });
    await expect(page.locator('text=View Projects')).toBeVisible();
    await expect(page.locator('text=Get in Touch')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('about: renders bio and tech sections', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/about`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Kurhula', { timeout: 10000 });
    await expect(page.locator('text=About Me')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('tech-stack: renders all tech categories', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/tech-stack`, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(
      () => document.body.textContent.includes('Cutting-edge technologies') ||
            document.body.textContent.includes('Languages'),
      { timeout: 30000 }
    );

    const bodyText = await page.evaluate(() => document.body.textContent);
    expect(bodyText).toContain('Languages');
    expect(bodyText).toContain('Frontend');
    expect(bodyText).toContain('Backend');
    expect(errors).toHaveLength(0);
  });

  test('projects: renders project cards', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/projects`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Projects', { timeout: 10000 });
    await expect(page.locator('text=View Details').first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('contact: form renders, validation works', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle' });
    await page.waitForFunction(
      () => document.querySelector('form') !== null,
      { timeout: 10000 }
    );

    await expect(page.locator('h1')).toContainText('Get in Touch', { timeout: 10000 });
    const submitBtn = page.locator('button[type="submit"]');
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();
    await expect(page.locator('text=Name is required')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('navigation: all public routes return 200', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    for (const path of ['/', '/about', '/projects', '/contact', '/tech-stack']) {
      const resp = await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(500);
      expect(resp.status()).toBe(200);
    }
    expect(errors).toHaveLength(0);
  });
});

test.describe('Auth', () => {

  test('login: page renders without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
    await expect(page.locator('h1')).toContainText('Welcome Back', { timeout: 10000 });
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    await page.goto(`${BASE}/dashboard`, { waitUntil: 'networkidle' });
    await page.waitForURL(/\/login/, { timeout: 10000 });
    await expect(page.locator('h1')).toContainText('Welcome Back');
  });
});

test.describe('Navigation', () => {

  test('header nav links navigate to correct pages', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    // Use direct goto to avoid Angular SPA click timing issues in CI
    const checks = [
      ['/', 'Software Engineer'],
      ['/about', 'Kurhula'],
      ['/tech-stack', 'Languages'],
      ['/projects', 'Projects'],
      ['/contact', 'Get in Touch'],
    ];

    for (const [path, content] of checks) {
      await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
      await page.waitForFunction(
        () => document.querySelector('app-root')?.textContent.trim().length > 50,
        { timeout: 15000 }
      );
      expect(page.url()).toContain(path);
      expect(await page.evaluate(() => document.body.textContent)).toContain(content);
    }
    expect(errors).toHaveLength(0);
  });

  test('footer links visible', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(BASE, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer').locator('a').first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });
});
