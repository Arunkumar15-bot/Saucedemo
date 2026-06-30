console.log("Step definitions loaded");

const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const LoginPage = require('../pages/loginpage');
const ProductPage = require('../pages/productpage');
const CheckoutPage = require('../pages/checkoutpage');

let browser;
let page;
let loginPage;
let productPage;
let checkoutPage;

Given('User launches SauceDemo website', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();

    loginPage = new LoginPage(page);
    productPage = new ProductPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.navigate();
});

When('User logs in with valid credentials', async function () {
    await loginPage.login('standard_user', 'secret_sauce');
});

When('User adds a product to cart', async function () {
    await productPage.addproduct();
    await productPage.gotocart();
});

When('User proceeds to checkout', async function () {
    await checkoutPage.checkout('Arun', 'Kumar', '627758');
});

Then('Order should be placed successfully', async function () {
    await browser.close();
});