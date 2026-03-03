const {test, expect} = require('@playwright/test')
const{POManger} = require('../PageObjects/POManger');
const{LoginPage}= require('../PageObjects/LoginPage');
const dataset = JSON.parse(JSON.stringify(require('../utils/placeorderTestData.json')));
const {customtest} = require('../utils/test-base');

for(const data of dataset){


test(`login and add product to cart for ${data.productName}`, async ({ page }) => {



    console.log(LoginPage);
    const pom = new POManger(page);
    const loginPage = pom.getLoginPage();
    const dashboardPage = pom.getDashboardPage();
    const cartPage = pom.getCartPage();
    const paymentPage = pom.getPaymentPage();
    const orderConfirmationPage = pom.getOrderConfirmationPage();
    const orderPage = pom.getOrderPage();
   
   
    const products = page.locator(".card-body");

    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);
    await dashboardPage.addProductToCart(data.productName);
    await dashboardPage.goToCart();
   

    // wait for products to load
    

    // go to cart and verify product
    await cartPage.checkoutProduct();
     await paymentPage.SubmitOrder();
   const orderNumber = await orderConfirmationPage.getOrderConfirmation();
    await orderConfirmationPage.goToOrdersPage();
    console.log("OrderNumber value:", orderNumber);
    await orderPage.findOrder(orderNumber);











});


}



customtest('login and add product to cart', async ({ page, testDataforOrder }) => {



    console.log(LoginPage);
    const pom = new POManger(page);
    const loginPage = pom.getLoginPage();
    const dashboardPage = pom.getDashboardPage();
    const cartPage = pom.getCartPage();
    const paymentPage = pom.getPaymentPage();
    const orderConfirmationPage = pom.getOrderConfirmationPage();
    const orderPage = pom.getOrderPage();
   
   
    const products = page.locator(".card-body");

    await loginPage.goTo();
    await loginPage.validLogin(testDataforOrder.username, testDataforOrder.password);
    await dashboardPage.addProductToCart(testDataforOrder.productName);
    await dashboardPage.goToCart();
   

    // wait for products to load
    

    // go to cart and verify product
    await cartPage.checkoutProduct();
     await paymentPage.SubmitOrder();
   const orderNumber = await orderConfirmationPage.getOrderConfirmation();
    await orderConfirmationPage.goToOrdersPage();
    console.log("OrderNumber value:", orderNumber);
    await orderPage.findOrder(orderNumber);











});