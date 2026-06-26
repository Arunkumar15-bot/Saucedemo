const {test,expect}=require('@playwright/test');
const homePage=require('../pages1/homepage.js');
const loginPage=require('../pages1/loginpage.js');
const productPage=require('../pages1/productpage.js');
const placeOrder=require('../pages1/placeorder.js');

test('demoblaze test',async({page})=>
{
    const homepage=new homePage(page);
    const loginpage=new loginPage(page);
    const productpage=new productPage(page);
    const placeorder=new placeOrder(page);

    await homepage.navigate();
    await loginpage.login("arun8899","arun123");
    await productpage.addproduct();

    await productPage.gotocart();
    await placeorder.place('Arun','Kumar','sivagiri','8899','12','2022');


});