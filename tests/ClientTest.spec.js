const {test, expect}=  require('@playwright/test')

test("login test",async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("Test17@gmail.com");
    await page.locator("#userPassword").fill("Rom@n12345");
    await page.locator("#login").click();
    await page.locator(".card-body").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
   

});

test("login test2",async ({page})=>
{
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   await page.locator('#username').fill('rahulshettyacademy8');
   await page.locator('#password').fill('learning');
   await page.locator('.checkmark').last().click();
   await page.locator('#okayBtn').click();
   await page.locator('select.form-control').selectOption('consult');
   await page.locator('#terms').click();
   await expect(page.locator('#terms')).toBeChecked();
   await page.locator('#terms').uncheck();
   await expect(page.locator('#terms')).not.toBeChecked();




});

test("child window handling",async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const documentLink = page.locator("a[href*='documents-request']");

   const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click()
    ]);

   console.log( await newPage.locator('.red').textContent());

});