Feature: Metamask

  Scenario: As a user, I setup the metamask plugin
    Given User setup the metamask plugin

  Scenario: User complete the transaction
    When User enter the stake amount "<amount>"
    When User select stake length "<Month>"
    When User click on start state button and confirm the payment
    Then User can displayed the stake "<amount>"

    Examples:
      | amount |  | Month     |
      | 25     |  | 3 Months  |
      | 20     |  | 6 Months  |
      | 25     |  | 12 Months |
      | 35     |  | 1 Month   |
