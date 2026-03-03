const { LoginPage } = require("./LoginPage");
const { Dashboard } = require("./Dashboard");
const { CartPage } = require("./CartPage");
const { PaymentPage } = require("./PaymentPage");
const {OrderConfirmation} = require("./OrderConfirmation");
const {OrderPage} = require("./OrderPage");

class POManger{


    constructor(page){

        this.page = page;

        this.loginpage = new LoginPage(this.page);
        this.dashboardpage = new Dashboard(this.page);
        this.cartpage = new CartPage(this.page);
        this.paymentpage = new PaymentPage(this.page);
        this.orderconfirmationpage = new OrderConfirmation(this.page);
        this.orderpage = new OrderPage(this.page);




    }

    getLoginPage(){

        console.log(POManger);

        return this.loginpage;
    }

    getDashboardPage(){

        return this.dashboardpage;
    }

    getCartPage(){

        return this.cartpage;
    }   

    getPaymentPage(){

        return this.paymentpage;
    }
    
    getOrderConfirmationPage(){


        return this.orderconfirmationpage;



    }
    getOrderPage(){

        return this.orderpage;
    }


}
module.exports = {POManger};