import { test, expect } from '@playwright/test';

let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://demoblaze.com/');
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('arun8899');
    await page.locator('#loginpassword').fill('arun123');
    await page.locator('[onclick="logIn()"]').click();
    console.log("Login successful");
});

test.afterAll(async () => {
    await page.locator('#logout2').click();
    console.log("Logout successful");
});

test("Home page test", async () => {

    const Product=await page.locator('.card-title');

    await expect(Product).toHaveCount(9);
    await expect(page).toHaveTitle(/STORE/);
    console.log("Home page test successfully");
});

test("add to cart test", async () => {
    page.on('dialog', async dialog => {
        console.log("Dialog message:", dialog.message());
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    });

    await page.locator('//a[text()="Sony xperia z5"]').click();
    console.log("Add to cart successful");
});