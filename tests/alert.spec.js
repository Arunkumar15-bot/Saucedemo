import { test,expect} from '@playwright/test';

test('Alert Test', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //alert(simple alert)(-----------------------)

    // await page.on('dialog', async dialog => {
    //     console.log(dialog.message());
    //     await dialog.accept();
    //     expect (dialog.message()).toBe('I am an alert box!');
    //     expect (dialog.type()).toBe('alert');
        
    // })
    // await page.locator('#alertBtn').click();
    //endofsimple alert(----------------------------)

    //Confirm alert(--------------------------)
    // await page.on('dialog', async dialog => {
        
    //     console.log(dialog.message());
    //     await dialog.dismiss();
    //     expect (dialog.message()).toBe('Press a button!');
    //     expect (dialog.type()).toBe('confirm');
    // })
    // await page.locator('#confirmBtn').click();
    // await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');

    //endofconfirm alert(---------------------------)

    await page.on('dialog', async dialog => {
        console.log(dialog.message());
        
        expect (dialog.message()).toBe('Please enter your name:');
        expect (dialog.type()).toBe('prompt');
        await dialog.accept("Harry Potter");
    })
    
    await page.locator('[onclick="myFunctionPrompt()"]').click();
    await expect(page.locator('#demo')).toHaveText('Hello Harry Potter! How are you today?');

})