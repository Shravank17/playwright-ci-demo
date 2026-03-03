const {test, expect,request} = require('@playwright/test')
const loginPayload = {userEmail:"Test17@gmail.com",userPassword:"Rom@n12345"};
let response;
const orderPayload = {orders:[{country:"India",productOrderedId:"6964af52c941646b7a919472"}]};
const{APIUtils} = require('../utils/APIUtils');

test.beforeAll( async() => {

   const apiContext = await request.newContext();
   const apiUtils = new APIUtils(apiContext,loginPayload);
   response = await apiUtils.createOrder(orderPayload);
   
   

    





    

});



test("login and add product to cart", async ({ page }) => {

    const productName = 'ZARA COAT 3';
    page.addInitScript(
        value =>{
            window.localStorage.setItem('token',value);
        } ,response.token
    );

    await page.goto("https://rahulshettyacademy.com/client/");

   

    // wait for products to load
    const products = page.locator(".card-body");
    await expect(products.first()).toBeVisible();

    

    // go to cart and verify product
    

    

;

await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();

const rows = page.locator("tbody tr");

for(const i = 0; i<rows.count(); i++){

    const roworderNumber= await rows.nth(i).locator("th").textContent();
    if(response.orderID.includes(roworderNumber)){

        await rows.nth(i).locator("button").first().click();
        console.log("order found");
        break;
        
    }

}








});


