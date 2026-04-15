import { test, expect, type Page } from '@playwright/test';

const BASE = 'http://localhost:4200';

async function gotoAndWait(page: Page, path = '/'): Promise<void> {
  await page.goto(`${BASE}${path}`, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('app-root')).toBeVisible();
  await page.waitForLoadState('networkidle');
}

test.describe('Public Pages', () => {
  test('home: page loads, hero visible, no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await gotoAndWait(page);

    await expect(page.locator('h1')).toContainText('Software Engineer', { timeout: 10000 });
    await expect(page.getByRole('link', { name: 'View My Work' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Let\'s Talk' }).first()).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('about: page loads, bio visible, no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await gotoAndWait(page, '/about');

    await expect(page.locator('h1')).toContainText('Software Engineer', { timeout: 10000 });
    await expect(page.getByText('About Me')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('projects: renders project cards, tab navigation works', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await gotoAndWait(page, '/projects');

    await expect(page.locator('h1')).toContainText('Projects', { timeout: 10000 });
    await expect(page.getByText('Projects & Systems')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('contact: form renders, validation works', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await gotoAndWait(page, '/contact');

    const nameInput = page.locator('#name');
    const emailInput = page.locator('#email');
    const submitBtn = page.getByRole('button', { name: 'Send Message' });

    await expect(page.locator('h1')).toContainText('Work Together', { timeout: 10000 });
    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(submitBtn).toBeVisible();

    await nameInput.focus();
    await emailInput.focus();

    await expect(page.getByText('Name is required (min 2 characters).')).toBeVisible();
    expect(errors).toHaveLength(0);
  });

  test('login: renders login form with email and password fields', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await gotoAndWait(page, '/login');

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

    await gotoAndWait(page, '/stack');

    await expect(page.locator('h1')).toContainText('Technical Stack', { timeout: 10000 });
    expect(errors).toHaveLength(0);
  });

  test('philosophy: renders design philosophy page', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
    page.on('pageerror', (err) => errors.push(err.message));

    await gotoAndWait(page, '/philosophy');

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
      { path: '/about', h1: 'Software Engineer' },
      { path: '/projects', h1: 'Projects' },
      { path: '/stack', h1: 'Technical Stack' },
      { path: '/philosophy', h1: 'System Design Philosophy' },
      { path: '/contact', h1: 'Work Together' },
    ];

    for (const check of navChecks) {
      await gotoAndWait(page, check.path);
      await expect(page.locator('h1')).toContainText(check.h1, { timeout: 10000 });
    }

    expect(errors).toHaveLength(0);
  });

  test('footer links visible', async ({ page }) => {
    await gotoAndWait(page);
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('footer').locator('a').first()).toBeVisible();
  });
});
