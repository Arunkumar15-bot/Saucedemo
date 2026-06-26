import {test,expect} from '@playwright/test';

test('keyboard handling',async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.click('#name');
    await page.keyboard.type('Arun');
    await page.click('#name');

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    await page.keyboard.press('Tab');

    await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000);
})