Feature: New Wallet Flow
  As a user
  I want be able to add a new wallet flow

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to add a wallet in their account
 And I add a wallet
 When I create an account successfully
 Then I add new pin