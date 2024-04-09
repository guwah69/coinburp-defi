Feature: Metamask

  Scenario: As a user, I setup the metamask plugin
    Given User setup the metamask plugin

  Scenario: Verify Stake Summary has all the correct values
    When User enter the stake amount "<amount>"
    When User select stake length "<Month>"
    Then Verify stack amount "<amount>",date "<Month>" and other information in stack summary
    Examples:
      | amount |  | Month     |
      | 40     |  | 3 Months  |
      | 50     |  | 6 Months  |
      | 60     |  | 12 Months |


  # Scenario:verify My Stakes and more info has correct info
  #   When User enter the stake amount "<amount>"
  #   When User select stake length "<Month>"
  #   When User click on start state button and confirm the payment
  #   Then User can displayed his stake amount "<amount>" , stake length "<Month>" and other information

  #   Examples:
  #     | amount |  | Month     |
  #     | 115    |  | 3 Months  |
  #     | 116    |  | 6 Months  |
  #     | 117    |  | 12 Months |


# Scenario: Verify user withdraw money
#   When User enter the stake amount "<amount>"
#   When User select stake length "<Month>"
#   When User click on start state button and confirm the payment
#   When User click on withdraw button
#   Then Verify user successfully withdrawed money

#   Examples:
#     | amount |  | Month    |
# | 11 |  | 3 Months  |
# | 81 |  | 6 Months  |
# | 91 |  | 12 Months |
