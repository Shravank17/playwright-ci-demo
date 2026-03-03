import {Locator, Page} from "@playwright/test";

export class Dashboard{
    page: Page;
    products: Locator;
    prodcuctsText: Locator;
    cart: Locator;


    constructor(page: any){
        this.page = page;

        this.products = page.locator(".card-body");
        this.prodcuctsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");







    }

    async addProductToCart(productName: string){

        
    const tilles = await  this.prodcuctsText.allTextContents();
    console.log(tilles);
    

    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
        const  name: string | null  = await this.products.nth(i).locator("b").textContent();

    if (name?.trim() === productName) {
            await this.products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }





    }

    async goToCart(){

        await this.cart.click();
        await this.page.locator("div li").first().waitFor();
    }








}
module.exports = {Dashboard};