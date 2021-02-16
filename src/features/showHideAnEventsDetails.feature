Feature: SHOW/HIDE AN EVENT'S DETAILS

  Scenario: An event element is collapsed by default
    Given a list of events
    When the user sees the events, but not details
    Then events should be collapsed by default

  Scenario: User can expand an event to see its details
    Given a list of events
    When the event is clicked by the user
    Then that should be expanded and the user can see the details

  Scenario: User can collapse an event to hide its details
    Given app loaded
    And event element is expanded and shows details
    When the user clicks to hide details
    Then the event should be collapsed