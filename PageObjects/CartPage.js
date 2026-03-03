const { expect } = require('@playwright/test');

class CartPage{


    constructor(page){
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