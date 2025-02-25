import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage ()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.submitLoginButton()

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfoPage()

    myInfoPage.fillPersonalDetails(chance.first(), 'Test', chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.string({ length: 5, numeric: true }),chance.cpf(),chance.string({ length: 5, numeric: true }),'2025-5-8',chance.cf(), chance.cf())
    myInfoPage.fillStatus('1990-5-8')
    myInfoPage.fillCustomField(chance.name())
    myInfoPage.saveForm()
  })
})