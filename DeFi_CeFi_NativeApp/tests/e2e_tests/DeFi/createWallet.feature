Feature: Create a Wallet
  As a user
  I want be able to a wallet to my account

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to add multiple wallets
 And I add a wallet
 