Feature: Swap Network
  As a user
  I want be able to swap Network

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to swap network
 And I restore wallet from Google Drive
 When I restore wallet with recovery phrase
 Then I swap Network to Kovan 