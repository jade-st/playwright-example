const { test } = require('../config/fixtures');
const { expect } = require('@playwright/test');

test.describe('Test the home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://jades.work/');
  });

  test('Should change content when clicking on a tab', async ({ homePage }) => {
    await homePage.clickTab('personal');
    await expect(homePage.personalTabContent).toContainText('📍 Based in Edinburgh.');
  });

  test('Should navigate when clicking a social link in the footer', async ({ homePage, context }) => {
    const [newPage] = await Promise.all([context.waitForEvent('page'), await homePage.clickSocialLink('GitHub')]);
    await newPage.waitForLoadState();
    await expect(newPage.url()).toBe('https://github.com/jade-st');
  });
});
