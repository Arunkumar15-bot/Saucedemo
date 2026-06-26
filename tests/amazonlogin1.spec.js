import {test,expect} from '@playwright/test'

test('Amazon login',async({page})=>
{
    await page.goto('https://www.amazon.in/');
    //const logo=await page.getByAltText('Cushion covers, bedsheets & more');
    //await expect(logo).toBeVisible();
    await page.locator('#nav-link-accountList-nav-line-1').click();
    await page.getByLabel('Enter mobile number or email').fill('9500499574');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByPlaceholder('Password').fill('arun123');
    await page.getByRole('button', { name: 'Sign in' }).click();
})

