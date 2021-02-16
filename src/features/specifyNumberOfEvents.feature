Feature: SPECIFY NUMBER OF EVENTS

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given 32 events
    When the user does not specify the number of events
    Then the default number should be 32


  Scenario: User can change the number of events they want to see
    Given 32 events
    When the user changes the number of events
    Then they can see the chosen number of events