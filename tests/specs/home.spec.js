const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

test.describe('Test the home page', () => {
  test('Should change content when clicking on a tab', async ({ page }) => {
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');
  });

  test('Should navigate when clicking a link in the footer', async ({ page }) => {
    await newTodo.fill(TODO_ITEMS[0]);
    await newTodo.press('Enter');
  });
});
