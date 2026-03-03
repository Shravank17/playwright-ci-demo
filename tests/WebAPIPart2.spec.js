const {test, expect} = require('@playwright/test')

let browserContext;


test.beforeAll( async({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();

await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator("#userEmail").fill("Test17@gmail.com");
    await page.locator("#userPassword").fill("Rom@n12345");
    await page.locator("#login").click();
   await page.locator(".card-body").first().waitFor();

    // ✅ NOW save storage state
    await context.storageState({ path: 'state.json' });
   browserContext = await browser.newContext({storageState:'state.json'});


});







test("login and add product to cart", async ({  }) => {

    const productName = 'ZARA COAT 3';
   const page = await browserContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");


    // wait for products to load
    const products = page.locator(".card-body");
    await expect(products.first()).toBeVisible();

    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const name = await products.nth(i).locator("b").textContent();

        if (name.trim() === productName) {
            await products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

    // go to cart and verify product
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();

    const cartProduct = page.locator("h3:has-text('ZARA COAT 3')");
    await expect(cartProduct).toBeVisible();
    

    await page.locator("text=Checkout").click();

    const d =  page.locator(".form-group .text-validated")
    d.pressSequentially("ind");
    
    const options =  page.locator(".ta-results");
    await options.waitFor()

   const optionscount = await options.locator("button").count()

   for (let i=0;i<optionscount;i++){
        
       const country =await options.locator("button").nth(i).textContent()

    if( country.trim() === "India"){

        await options.locator("button").nth(i).click();
        break;
   }

}

await page.locator(".ta-backdrop").waitFor({ state: "hidden" });
await page.locator(".btnn").click();

const orderConfirmation = await page.locator(".hero-primary").textContent();
expect(orderConfirmation).toContain("Thankyou for the order.");

const orderNumber = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderNumber);
await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();

const rows = page.locator("tbody tr");

for(const i = 0; i<rows.count(); i++){

    const roworderNumber= await rows.nth(i).locator("th").textContent();
    if(orderNumber.includes(roworderNumber)){

        await rows.nth(i).locator("button").first().click();
        break;
         console.log("order found");
    }

}








});


