import {test,expect} from '@playwright/test'

test('Amazon login',async({page})=>
{
    await page.goto("https://www.amazon.in/");
    
    await page.locator("span#nav-link-accountList-nav-line-1").click();
    await page.locator("input#ap_email_login").fill("9500499574");
    await page.locator('input[type="submit"]').click();
    await page.locator("input#ap_password").fill("arun123");
    await page.locator("input#signInSubmit").click();
})

