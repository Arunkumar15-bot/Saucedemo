import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle(/STORE/);
  await expect(page).toHaveURL('https://demoblaze.com/');

  await page.getByRole('link', { name: 'Log in' }).click();
  await expect(page.locator('#logInModal')).toBeVisible();

  await page.locator('#loginusername').fill('arun8899');
  await page.locator('#loginpassword').fill('arun123');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page.locator('#nameofuser')).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('arun8899');

  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await expect(page).toHaveURL(/prod/);
  await expect(page.getByRole('heading', { name: 'Samsung galaxy s6' })).toBeVisible();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveURL('https://demoblaze.com/');

  await page.getByRole('link', { name: 'Sony xperia z5' }).click();
  await expect(page.getByRole('heading', { name: 'Sony xperia z5' })).toBeVisible();

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`); 
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Cart' }).click();
  await expect(page).toHaveURL(/cart/);
  await expect(page.locator('tbody tr')).toHaveCount(6); 


  await page.getByRole('link', { name: 'Delete' }).nth(1).click();
  await page.getByRole('link', { name: 'Delete' }).first().click();



  await expect(page.locator('tbody tr')).toHaveCount(4); 

  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole('dialog', { name: 'Place order' })).toBeVisible();
  await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();

});