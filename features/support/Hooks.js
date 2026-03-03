const { chromium } = require('playwright');
const { POManger } = require('../../PageObjects/POManger');
const { Before, After, BeforeStep, AfterStep } = require('@cucumber/cucumber');

Before(async function () {


    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    this.page = await context.newPage();

    this.pom = new POManger(this.page);



});

BeforeStep(async function () {

});

AfterStep(async function ({result}) {

    if(result.status === 'FAILED'){

        await this.page.screenshot({path:'screenshot.png', fullPage:true});

    }

});

After(async function () {


    await browser.close();

});