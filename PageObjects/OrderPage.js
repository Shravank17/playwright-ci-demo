class OrderPage{



    constructor(page){
        this.page = page;

        this.orderRows = this.page.locator("tbody tr");





    }

    async findOrder(orderNumber){

        console.log(OrderPage);
        const row = await this.orderRows.count();
    

        for(let i = 0; i<row; i++){

    const roworderNumber= await this.orderRows.nth(i).locator("th").textContent();
    if(orderNumber.includes(roworderNumber)){

        await this.orderRows.nth(i).locator("button").first().click();
        console.log("order found");
        break;
        
    }

}




    }




}
module.exports = {OrderPage};