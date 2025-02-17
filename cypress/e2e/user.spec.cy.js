import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']", 
    passwordFiel: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    middleNameField: '[name="middleName"]',
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    genericDropdonwField: '.oxd-select-text--active',
    genericDropdownList: ".oxd-select-option",
    calendarYearSelector: '.oxd-calendar-selector-year-selected',
    calendarDropdonwList: '.oxd-calendar-dropdown--option',
    smokerCheckbox: '.oxd-checkbox-input',
    toastCloseButton: '.oxd-toast-close',
    submitButton: "[type='submit']",

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordFiel).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    cy.get(selectorsList.firstNameField).clear().type("Pedro")
    cy.get(selectorsList.middleNameField).clear().type("Bulhoes")
    cy.get(selectorsList.lastNameField).clear().type("Dias")
    cy.get(selectorsList.genericField).eq(3).clear().type("nicknametest")
    cy.get(selectorsList.genericField).eq(4).clear().type("employee-1")
    cy.get(selectorsList.genericField).eq(5).clear().type("otherIdTest")
    cy.get(selectorsList.genericField).eq(6).clear().type("driverlicenseTest")
    cy.get(selectorsList.genericField).eq(7).click()
    cy.get(selectorsList.calendarYearSelector).click()
    cy.get(selectorsList.calendarDropdonwList).eq(55).click()
    cy.get(selectorsList.dateCloseButton).click().wait(500)
    cy.get(selectorsList.genericField).eq(8).clear().type('01234test')
    cy.get(selectorsList.genericField).eq(9).clear().type('01234test')
    cy.get(selectorsList.genericDropdonwField).eq(0).click()
    cy.get(selectorsList.genericDropdownList).eq(0).click().wait(500)
    cy.get(selectorsList.genericDropdonwField).eq(0).click()
    cy.get(selectorsList.genericDropdownList).eq(26).click()
    cy.get(selectorsList.genericDropdonwField).eq(1).click()
    cy.get(selectorsList.genericDropdownList).eq(2).click()
    cy.get(selectorsList.genericField).eq(12).clear().type('militaryTest')
    cy.get(selectorsList.smokerCheckbox).eq(0).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get("body").should("contain", "Successfully Updated")
    cy.get(selectorsList.toastCloseButton)
    
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordFiel).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})