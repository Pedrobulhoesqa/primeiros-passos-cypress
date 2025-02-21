import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import userData from '../fixtures/users/userData.json'

const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.submitLoginButton()
    dashboardPage.checkDashboardPage()
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.submitLoginButton()
    loginPage.checkAccessInvalid()
  })

  it('Login - Empty', () => {
    loginPage.accessLoginPage()
    loginPage.submitLoginButton()
    loginPage.checkAccessRequired()
  })

})