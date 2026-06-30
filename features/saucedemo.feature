Feature: SauceDemo Product Purchase

  Scenario: Login and purchase a product successfully
    Given User launches SauceDemo website
    When User logs in with valid credentials
    And User adds a product to cart
    And User proceeds to checkout
    Then Order should be placed successfully