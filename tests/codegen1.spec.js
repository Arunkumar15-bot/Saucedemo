import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.locator('#a-autoid-1-announce').click();
  await page.getByRole('button', { name: 'Increase quantity by one' }).click();
});