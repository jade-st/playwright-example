const { test } = require('../config/fixtures');
const { expect } = require('@playwright/test');

test.describe('Test the error page', () => {
  test('Should redirect to an error screen when a page does not exist', async ({ page, errorPage }) => {
    await page.goto('http://localhost:3000/does-not-exist');
    await expect(errorPage.errorMessage).toBeVisible();
  });
});
