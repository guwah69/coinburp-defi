Feature: Delete a Wallet
  As a user
  I want be able to delete a wallet in my account

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to delete a wallet in their account
 When I add a wallet
 Then I can delete a wallet