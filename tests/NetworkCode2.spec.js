const { test, expect } = require('@playwright/test');



test("Reqquest  interception demo", async ({ page }) => {



    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("Test17@gmail.com");
    await page.locator("#userPassword").fill("Rom@n12345");
    await page.locator("#login").click();
    await page.locator(".card-body").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
      route => route.continue({ url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=1234567890" }));
    

        
    
    await page.locator("button:has-text('View')").first().click();

    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");



});
