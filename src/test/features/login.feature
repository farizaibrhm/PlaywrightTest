Feature: login page validation

@1123486
Scenario: login with valid user name and password
  Given I am on the login page
  When I enter "validUser" as user name
  And I enter "validPassword" as password
  And I click on the "Submit" button
  Then I should see "Login Successful" message


@1123487
Scenario Outline: login with invalid user name and password
  Given I am on the login page
  When I enter "<invalidUser>" as user name
  And I enter "<invalidPassword>" as password
  And I click on the "Submit" button
  Then I should see "Login Unsuccessful" message

Examples:
    | invalidUser  | invalidPassword |
    | user1        | pass1           |
    | user2        | pass2           |
    | user3        | pass3           |