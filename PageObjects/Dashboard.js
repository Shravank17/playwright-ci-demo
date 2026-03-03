class Dashboard{


    constructor(page){
        this.page = page;

        this.products = page.locator(".card-body");
        this.prodcuctsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");







    }

    async addProductToCart(productName){

        
    const tilles = await  this.prodcuctsText.allTextContents();
    console.log(tilles);
    

    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
        const name = await this.products.nth(i).locator("b").textContent();

        if (name.trim() === productName) {
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