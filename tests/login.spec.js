const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Verify login page loads', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await expect(page).toHaveURL(/login.php/);
});