const {test , expect} = require('@playwright/test')

test("login", async ({page})=>{


   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  await expect( page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).not.toBeVisible();

  page.on('dialog', dialog =>{dialog.accept()});
    await page.locator("#confirmbtn").click();

    const frame = page.frameLocator("#courses-iframe");
    await frame.locator("a[href*='mentorship']").first().click();

    console.log( await frame.locator(".pricing-title").nth(1).textContent());


 



});