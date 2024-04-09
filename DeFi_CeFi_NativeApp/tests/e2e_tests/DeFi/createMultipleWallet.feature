Feature: Create Multiple Wallet
  As a user
  I want be able to add multiple wallets to my account

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to add multiple wallets
 And I add a wallet
 And I can add another wallet