import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  projects: [
    // iPhone SE — R05
    {
      name: 'mobile-320',
      use: { ...devices['iPhone SE'] },
    },
    // iPhone 12 — R05
    {
      name: 'mobile-375',
      use: { ...devices['iPhone 12'] },
    },
    // iPhone 15 — R05
    {
      name: 'mobile-390',
      use: { ...devices['iPhone 15'] },
    },
    // Desktop
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200',
    reuseExistingServer: !process.env.CI,
  },
});
