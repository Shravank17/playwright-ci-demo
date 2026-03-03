const { Given, When, Then } = require('@cucumber/cucumber');




let orderNumber;

Given('a login to Ecommerece application with {string} and {string}', async function (username, password) {

    
    const loginPage = this.pom.getLoginPage();

    await loginPage.goTo();
    await loginPage.validLogin(username, password);
});

When('add {string} to cart', async function (product) {

    const dashboardPage = this.pom.getDashboardPage();
    await dashboardPage.addProductToCart(product);
    await dashboardPage.goToCart();
});

Then('verify {string} is displayed in the cart', async function (product) {

    const cartPage = this.pom.getCartPage();
    await cartPage.checkoutProduct();
});

When('enter valid details and place the order', async function () {

    const paymentPage = this.pom.getPaymentPage();
     this.orderConfirmationPage = this.pom.getOrderConfirmationPage();

     await paymentPage.SubmitOrder();
    orderNumber = await this.orderConfirmationPage.getOrderConfirmation();
});

Then('Verify if the order is present in the OrderHistory page', async function () {

    const orderPage = this.pom.getOrderPage();
    await this.orderConfirmationPage.goToOrdersPage();
    console.log("OrderNumber value:", orderNumber);
    await orderPage.findOrder(orderNumber);
});