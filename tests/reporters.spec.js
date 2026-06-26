import {test,expect} from '@playwright/test';

test('test 1',async ({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');

});

test('test 2',async ({page})=>{
    
    await page.goto("https://www.amazon.in/");
    
    await expect(page).toHaveURL('https://www.amazon.in/');

});

test('test 3',async ({page})=>{
    
    await page.goto("https://www.flipkart.com/");
    await expect(page).toHaveURL('https://www.amazon.in/');
});