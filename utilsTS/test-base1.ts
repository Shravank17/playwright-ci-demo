
import {test as baseTest} from '@playwright/test';

interface TestDataForOrder{

    username: string;
    password: string;
    productName: string;



}

export const customtest =baseTest.extend<{testDataforOrder:TestDataForOrder}>({


    testDataforOrder:
    {
        username:"Test17@gmail.com",
        password: "Rom@n12345",
        productName: "ZARA COAT 3"
    }

})