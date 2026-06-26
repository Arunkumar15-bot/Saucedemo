import {test,expect} from '@playwright/test'

test('checkbox check',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator('#sunday').click();
    //await page.locator('#monday').click();
    //await page.locator('#wednesday').click();

    await page.getByRole('checkbox',{name : 'Sunday'}).click();
    await page.getByRole('checkbox',{name : 'Monday'}).click();
    await page.getByRole('checkbox',{name : 'Wednesday'}).click();
    
    expect(await page.getByRole('checkbox',{name : 'Sunday'}).isChecked()).toBeTruthy();
    expect(await page.getByRole('checkbox',{name : 'Monday'}).isChecked()).toBeTruthy();
    expect(await page.getByRole('checkbox',{name : 'Tuesday'}).isChecked()).toBeFalsy();
    expect(await page.getByRole('checkbox',{name : 'Wednesday'}).isChecked()).toBeTruthy();
    expect(await page.getByRole('checkbox',{name : 'Thursday'}).isChecked()).toBeFalsy();
    expect(await page.getByRole('checkbox',{name : 'Friday'}).isChecked()).toBeFalsy();
    expect(await page.getByRole('checkbox',{name : 'Saturday'}).isChecked()).toBeFalsy();



})