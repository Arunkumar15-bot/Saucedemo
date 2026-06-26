import { test, expect } from '@playwright/test';

test('radiobox check', async ({ page }) => {

    await page.goto('https://www.amazon.in/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang');
    //await page.getByRole('link', { name: 'Choose a language for shopping in Amazon India. The current selection is' }).click();

   //await page.getByRole('radio', { name: 'தமிழ்' }).click({force:true});
    await page.getByRole('radio', { name: 'தமிழ்' }).click({force:true});
    
    expect(await page.getByRole('radio', { name: 'TA' }).isChecked()).toBeTruthy();

    expect(await page.getByRole('radio', { name: 'English' }).isChecked()).toBeFalsy();
    expect(await page.getByRole('radio', { name: 'हिन्दी' }).isChecked()).toBeFalsy();
    expect(await page.getByRole('radio', { name: 'বাংলা' }).isChecked()).toBeFalsy();
    expect(await page.getByRole('radio', { name: 'मराठी' }).isChecked()).toBeFalsy();
    expect(await page.getByRole('radio', { name: 'తెలుగు' }).isChecked()).toBeFalsy();
    expect(await page.getByRole('radio', { name: 'ಕನ್ನಡ' }).isChecked()).toBeFalsy();

});