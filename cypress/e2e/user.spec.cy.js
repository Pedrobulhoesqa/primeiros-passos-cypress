import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfoPage()
    myInfoPage.fillPersonalDetails('Pedro', 'Rodrigues', 'Bulhoes', 'NicknameTest')
    myInfoPage.fillEmployeeDetails('employeeId','otherId','driverLicense','2025-5-20','123456', '654321')
    myInfoPage.fillStatus('1995-11-07')
    myInfoPage.saveForm()
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordFiel).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})