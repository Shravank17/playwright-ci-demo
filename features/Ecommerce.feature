Feature: Ecommerce Order

  Scenario Outline: Placing an order
    Given a login to Ecommerece application with "<username>" and "<password>"
    When add "ZARA COAT 3" to cart
    Then verify "ZARA COAT 3" is displayed in the cart
    When enter valid details and place the order
    Then Verify if the order is present in the OrderHistory page

    Examples:
      | username            | password     |
      | Test17@gmail.com    | Rom@n12345   |
      |kshravanmlr@gmail.com| Rom@n45678   |