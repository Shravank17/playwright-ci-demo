import {Page, Locator, expect} from "@playwright/test";
export class OrderConfirmation{

      page: Page;
      orderConfirmation: Locator;
      orderNumber: Locator;
      orderbtn: Locator;
      orderTable: Locator;


    constructor(page:any){
        this.page = page;


          this.orderConfirmation = page.locator(".hero-primary");
          this.orderNumber = page.locator(".em-spacer-1 .ng-star-inserted");
          this.orderbtn = page.locator("button[routerlink*='myorders']");
          this.orderTable = page.locator("tbody tr");
        

 }

 async getOrderConfirmation(){


    await this.orderConfirmation.textContent();
    await expect(this.orderConfirmation).toHaveText("Thankyou for the order.");
    let orderNumber:any ;
    const textContent = await this.orderNumber.textContent();
    orderNumber = textContent ? textContent.trim() : '';
   console.log(orderNumber);
    
    return orderNumber;




 }

 async goToOrdersPage(){


    await this.orderbtn.click();
    await this.orderTable.first().waitFor();







 }









}
module.exports = {OrderConfirmation};