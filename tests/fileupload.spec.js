import {test,expect} from '@playwright/test';

test('fileupload',async({page})=>{
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#singleFileInput")
         .setInputFiles(
            [
                "files\\reportnew.pdf"
            ]
         
);

await page.click('//button[text()="Upload Single File"]');

});