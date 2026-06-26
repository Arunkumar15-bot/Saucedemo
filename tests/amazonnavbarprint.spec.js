import { test } from '@playwright/test';

test('Amazon navbar print', async ({ page }) => {

    await page.goto('https://skillfortinstitute.com/');

    // Locate all navbar list items
    const navItems = await page.locator("//ul[@id='menu_header_2']/li/a/span").all();
    

    for (const product of navItems) {
        const text = await product.textContent();
        console.log(text);
        }
});