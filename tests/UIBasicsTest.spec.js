const{test,expect} = require('@playwright/test')
test('First playwright test',async ({browser})=>
{
   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await page.locator('#username').fill('rahulshettyacademy8');
   await page.locator('#password').fill('learning');
   await page.locator('#signInBtn').click();
   console.log(await page.locator("[style*='block']").textContent());
   await expect(page.locator("[style*='block']")).toContainText('Incorrect');
   await page.locator('.card-body .card-title').nth(0).click();
   await page.locator('.card-body .card-title').last().click();

   



});

test('Page Navigation',async ({page})=>
{

   await page.goto('https://www.google.com/');
   console.log(await page.title());
   await expect(page).toHaveTitle('Google');

});

