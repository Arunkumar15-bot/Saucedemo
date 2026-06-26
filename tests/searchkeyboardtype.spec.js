import {test,expect} from '@playwright/test';

test('Search keyboard type', async ({page}) => {
    
    await page.goto('https://www.amazon.in/');

    await page.locator('#twotabsearchtextbox').click();
    await page.keyboard.type('iphone');
    await page.keyboard.press('Enter');

    
    const check=await page.getByRole('link', { name: 'Apply the filter Get It by' });
    await check.click();
                    
    await expect(check).toBeTruthy();

   
    //await page.waitForLoadState('networkidle');
    // const products = page.locator('h2.a-size-medium span');
    // const count = await products.count();
    // console.log('Total products found:', count);

    // for (let i = 0; i < count; i++) {
    //     const name = await products.nth(i).innerText();
    //     console.log(`Product ${i + 1}:`, name);
    // }

    await page.locator('button#a-autoid-21-announce').click();

    await page.locator('a#nav-cart').click();
    await expect(page.locator('#nav-cart-count-container')).toContainText('1');  
    await expect(await page.locator('//div[@class="a-row a-grid-vertical-align a-grid-top sc-list-item-content-inner"]')).toHaveCount('1');
})


