class LoginPage {
    selectorsList() {
        const selectorsLogin ={
            usernameField: "[name='username']", 
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            requiredCredentialAlert: ".oxd-input-field-error-message"
        }

        return selectorsLogin

    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
    }

    checkAccessInvalid () {
        cy.get(this.selectorsList().wrongCredentialAlert).should('exist')
    }

    checkAccessRequired () {
        cy.get(this.selectorsList().requiredCredentialAlert).should('exist')
    }

    submitLoginButton () {
        cy.get(this.selectorsList().loginButton).click().wait(1000)
    }

}

export default LoginPage