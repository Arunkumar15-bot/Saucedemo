import {test,expect} from '@playwright/test';

test('Tables', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table=page.locator('#productTable');

    const columns=table.locator('thead tr th');
    const rows=table.locator('tbody tr');

    console.log(await columns.count());
    console.log(await rows.count());

    await expect (columns).toHaveCount(4);
    await expect (rows).toHaveCount(5);

    const matchedrow = rows.filter({hasText: 'Smartwatch'});

    await matchedrow.locator('input[type="checkbox"]').check();

})