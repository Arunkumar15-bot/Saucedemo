import {test,expect} from '@playwright/test';

test('test', async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill("#name","Arun");
    await page.fill("#email","sivaarun052@gmail.com");
    await page.fill("#phone","9500499574");
    await page.fill("#textarea","7c/1 west car street kumarapuram sivagiri");
    await page.locator('#male').click();
    await page.getByRole('checkbox',{name : 'Saturday'}).click();
    await page.getByRole('checkbox',{name : 'Sunday'}).click();

    await page.locator('select#country').selectOption('India');

    expect (await page.getByRole('option', { name: 'India' })).toBeTruthy();

})