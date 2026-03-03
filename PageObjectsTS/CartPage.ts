
import {expect, Locator, Page} from '@playwright/test';

export class CartPage{
    page: Page;
    checkoutBtn: Locator;
    cartProduct: Locator;




    constructor(page: any){
        this.page = page;
        this.checkoutBtn = page.locator("text=Checkout");


        this.cartProduct = page.getByRole("button",{name:"continue shopping"});


    }

    async checkoutProduct(){


        await expect(this.cartProduct).toBeVisible();
            
        
         await this.checkoutBtn.click();


    }









}
module.exports = {CartPage};