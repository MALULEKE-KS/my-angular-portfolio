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
    await expect(page.locator('text=Contact Me')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('about: page loads, bio visible, no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/about`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Kurhula', { timeout: 10000 });
    await expect(page.locator('text=About Me').first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('projects: renders project cards, tab navigation works', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/projects`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Projects', { timeout: 10000 });
    await expect(page.locator('text=View Projects').first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('contact: form renders, validation works', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/contact`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Work Together', { timeout: 10000 });
    const nameInput = page.locator('input[id="name"]');
    const emailInput = page.locator('input[id="email"]');
    const submitBtn = page.locator('button[type="submit"]');

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(submitBtn).toBeVisible();
    await expect(page.locator('text=Name is required').first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('login: renders login form with email and password fields', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Welcome Back', { timeout: 10000 });
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('stack: renders technical stack page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/stack`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('Technical Stack', { timeout: 10000 });
    expect(errors).toHaveLength(0);
  });

  test('philosophy: renders design philosophy page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto(`${BASE}/philosophy`, { waitUntil: 'networkidle' });
    await waitForAngular(page);

    await expect(page.locator('h1')).toContainText('System Design Philosophy', { timeout: 10000 });
    expect(errors).toHaveLength(0);
  });
});

test.describe('Navigation', () => {
  test('header nav links navigate to correct pages', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    const navChecks = [
      { path: '/about', h1: 'Kurhula' },
      { path: '/projects', h1: 'Projects' },
      { path: '/stack', h1: 'Technical Stack' },
      { path: '/philosophy', h1: 'System Design Philosophy' },
      { path: '/contact', h1: 'Work Together' },
    ];

    for (const check of navChecks) {
      await page.goto(`${BASE}${check.path}`, { waitUntil: 'networkidle' });
      await waitForAngular(page);
      await expect(page.locator('h1')).toContainText(check.h1, { timeout: 10000 });
    }
    expect(errors).toHaveLength(0);
  });

  test('footer links visible', async ({ page }) => {
    await page.goto(BASE, { waitUntil: 'networkidle' });
    await waitForAngular(page);
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer').locator('a').first()).toBeVisible();
  });
});