
import { LoginPage } from "./LoginPage";
import {Dashboard} from "./Dashboard";
import {CartPage} from "./CartPage";
import{ PaymentPage } from "./PaymentPage";
import { OrderConfirmation } from "./OrderConfirmation";
import { OrderPage } from "./OrderPage";
import{Page} from "@playwright/test";

export class POManger{
    loginpage: LoginPage;
    dashboardpage: Dashboard
    cartpage: CartPage;
    paymentpage: PaymentPage;
    orderconfirmationpage: OrderConfirmation;
    orderpage: OrderPage
    page: Page;


    constructor(page: any){

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