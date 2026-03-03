import {Page, Locator} from "@playwright/test";
export class PaymentPage{
    page: Page;
    d: Locator
    options: Locator;
    backdrop: Locator;
    btn: Locator;


    constructor(page:any){

        this.page = page;
       this.d =  page.locator(".form-group .text-validated");
       this.options =  page.locator(".ta-results");
       this.backdrop = page.locator(".ta-backdrop");
      this.btn = page.locator(".btnn")




    }

    async SubmitOrder(){

        console.log(PaymentPage);

        this.d.pressSequentially("ind");
        await this.options.waitFor();

        const optionscount = await this.options.locator("button").count();


        
   for (let i=0;i<optionscount;i++){

        let country:any;
        
        country =await this.options.locator("button").nth(i).textContent()

    if( country.trim() === "India"){

        await this.options.locator("button").nth(i).click();
        break;
   }

         }

await this.backdrop.waitFor({ state: "hidden" });
await this.btn.click();


        

    }






}
module.exports = {PaymentPage};
