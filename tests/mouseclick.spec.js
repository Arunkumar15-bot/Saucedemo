import {test,expect} from '@playwright/test';

// test('mouseclick',async({page})=>{

//     await page.goto('https://testautomationpractice.blogspot.com/');

//     const copy=page.locator('//button[@ondblclick="myFunction1()"]');

//     await copy.click({button:'right',clickCount:2});

//     await expect(copy).toBeVisible();
//     await page.waitForTimeout(5000);
// })

//dropandrop

test('dropandrop',async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    //approach1

    // const s=page.locator('#draggable');
    // const t=page.locator('#droppable');

    // await s.hover();
    // await page.mouse.down();
    // await t.hover();
    // await page.mouse.up();

    //approach2
    
    await page.locator('#draggable').dragTo(page.locator('#droppable'));

    await page.waitForTimeout(5000);

})