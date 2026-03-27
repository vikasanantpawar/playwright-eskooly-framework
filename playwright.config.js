// playwright.config.js

const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  expect: {
    timeout: 5000
  },

  retries: 1,

  workers: 2,

  use: {
    baseURL: 'https://www.eskooly.com',

    headless: false, // change to true in CI

    viewport: { width: 1280, height: 720 },

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

    actionTimeout: 10000,
    navigationTimeout: 15000
  },

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ]
});