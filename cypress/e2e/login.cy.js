import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']", 
    passwordFiel: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }

  

  it('Login - Success', () => {
<<<<<<< HEAD
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordFiel).type('admin123')
=======
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSuccess.password)
>>>>>>> c0673efaac59f3bbb8e24960edba2e271d2e9f72
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

  it('Login - Fail', () => {
<<<<<<< HEAD
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordFiel).type('test123')
=======
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
>>>>>>> c0673efaac59f3bbb8e24960edba2e271d2e9f72
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})