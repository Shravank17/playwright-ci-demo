const base = require('@playwright/test');

exports.customtest =base.extend({


    testDataforOrder:
    {
        username:"Test17@gmail.com",
        password: "Rom@n12345",
        productName: "ZARA COAT 3"
    }

})