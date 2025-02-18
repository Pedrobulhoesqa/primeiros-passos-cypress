class DashboardPage {

    selectorsList() {
        const selectorsDashboard ={
            dashboardGrid: ".oxd-text--h6",
        }

        return selectorsDashboard

    }
    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).contains('Dashboard')
    }
}

export default DashboardPage