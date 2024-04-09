Feature: Raffle

    Scenario: User can get information about raffle

        When user navigate to url and click on the Raffle index
        Then raffle page is displayed
        When enters a raffle Index "<loadRaffle>"
        When enters a raffle Index of draft winner "<draftWinner>"
        When enters a entropy of draft winner "<entropy>"
        When enters raffle index of add prizes "<addPrizes>"
        When enters raffle index of load prizes "<loadPrizes>"
        When enters raffle index of prize winner "<prizeWinner>"
        When enters a prize id of prize winner "<prizeId>"


        Examples:
            | loadRaffle |  | draftWinner |  | entropy |  | addPrizes |  | loadPrizes |  | prizeWinner |  | prizeId |
            | 999        |  | 999         |  | data    |  | 999       |  | 999        |  | 999         |  | 3999    |
            | 2000       |  | 2000        |  | user1   |  | 2000      |  | 2000       |  | 2000        |  | 2000    |
            | 4999       |  | 4999        |  | user2   |  | 4999      |  | 4999       |  | 4999        |  | 4999    |
            | 5000       |  | 5000        |  | user3   |  | 5000      |  | 5000       |  | 5000        |  | 5000    |
            | 8000       |  | 8000        |  | user4   |  | 8000      |  | 8000       |  | 8000        |  | 8000    |
            | 9999       |  | 9999        |  | user5   |  | 9999      |  | 9999       |  | 9999        |  | 9999    |
            | 1000       |  | 1000        |  | user6   |  | 1000      |  | 1000       |  | 1000        |  | 1000    |

