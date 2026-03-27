const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const user = require('../test-data/user.json');


test('Valid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(user.validUser.email, user.validUser.password);

  await expect(page).not.toHaveURL(/login.php/);
});


test('Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(user.invalidUser.email, user.invalidUser.password);

  await expect(page).toHaveURL(/login.php/);
});


test('Empty Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.login(user.emptyUser.email, user.emptyUser.password);

  await expect(page).toHaveURL(/login.php/);
});