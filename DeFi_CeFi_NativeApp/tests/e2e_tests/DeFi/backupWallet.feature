Feature: Wallet Backup
  As a user
  I want be able to backup my wallet

Background: Load App
Given I launch the app and select already have a wallet

  @androidBrowser @iosBrowser @iosApp
 Scenario: User is able to backup their wallet
 And I am able to back up my wallet

