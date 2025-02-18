class MenuPage {

    selectorsList() {

        const selectorsMenu ={
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selectorsMenu
    }

    accessMyInfoPage() {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')
    }
}

export default MenuPage