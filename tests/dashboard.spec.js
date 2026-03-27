const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const user = require('../test-data/user.json');

test('Login and verify dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.open();
  await loginPage.login(user.email, user.password);

  // Avoid blind wait — validate navigation
  await expect(page).not.toHaveURL(/login.php/);

  // Dashboard validation
  await dashboardPage.verifyDashboard();
});