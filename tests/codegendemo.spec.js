import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('9500499574');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('arun123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});