const {test, expect,request} = require('@playwright/test')
const loginPayload = {userEmail:"Test17@gmail.com",userPassword:"Rom@n12345"};
let token;
let orderID;
const fakeresponse = {data:[],message:"No Orders"}
const orderPayload = {orders:[{country:"India",productOrderedId:"6964af52c941646b7a919472"}]}

test.beforeAll( async() => {

   const apiContext = await request.newContext();
   const loginResponse =await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
    {data:loginPayload

    }

    
    

   );
    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();
     token = loginResponseJson.token;
    console.log(token); 

    const orderResponse =await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",{

        data: orderPayload,

        headers: {

            'Authorization': token,

            'Content-Type': 'application/json'


        },





    }) ;

   const  orderResponseJson = await orderResponse.json();
   console.log(orderResponseJson);

   orderID = orderResponseJson.orders[0];





    

});



test("login and add product to cart", async ({ page }) => {

    const productName = 'ZARA COAT 3';
    page.addInitScript(
        value =>{
            window.localStorage.setItem('token',value);
        } ,token
    );

    

    await page.route("**/api/ecom/order/get-orders-for-customer/**", 
        async route=>{

          const response = await route.fetch();
         

       await  route.fulfill({

           response,
      
      body: JSON.stringify(fakeresponse)
            

            

        }

        )
    });

    await page.goto("https://rahulshettyacademy.com/client/");

   

    // wait for products to load
    const products = page.locator(".card-body");
    await expect(products.first()).toBeVisible();

    

    // go to cart and verify product
    

    

;

await page.locator("button[routerlink*='myorders']").click();
await expect(
  page.locator("text=You have No Orders to show at this time.")
).toBeVisible();












});


