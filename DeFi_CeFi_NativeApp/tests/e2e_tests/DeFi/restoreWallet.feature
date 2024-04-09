Feature: New Wallet Flow
  As a user
  I want be able to add a new wallet flow

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to restore wallet in their account
 And I restore wallet from Google Drive
 When I restore wallet with recovery phrase
 Then I can watch an Ethereum address