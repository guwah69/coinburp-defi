Feature: Buy ETH
  As a user
  I want be able to buy ETH

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to buy ETH
 And I can buy ETH