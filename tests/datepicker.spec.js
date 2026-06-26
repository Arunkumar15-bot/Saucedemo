import {test,expect} from '@playwright/test';

test('DatePicker', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //page.locator('#datepicker').fil('01/01/2022');

   

    // await page.locator('.ui-datepicker-year').selectOption('2021');

    // await page.locator('.ui-datepicker-month').selectOption('May');

    // await page.locator('//a[@class="ui-state-default ui-state-hover"]').text()

    const year='2021';
    const month='May';
    const date='19';

    await page.locator('#datepicker').click();

    while(true)
    {
        const selectedYear=await page.locator('.ui-datepicker-year').textContent();
        const selectedMonth=await page.locator('.ui-datepicker-month').textContent();

        if(selectedYear == year && selectedMonth == month)
        {
            await page.locator('//a[text()=${date}]').click();
            break;
        }
        
        await page.locator('[title="Prev"]').click();

    }







})