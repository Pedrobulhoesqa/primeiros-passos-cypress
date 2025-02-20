class MyInfoPage {

    selectorsList() {

        const selectorsMyInfo ={
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: '[name="firstName"]',
            middleNameField: '[name="middleName"]',
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input",
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

        return selectorsMyInfo
    }

    fillPersonalDetails(firstName,middleName,lastName,nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().genericField).eq(3).clear().type(nicknametest)
    }

    fillEmployeeDetails(employeeId,otherId,driverLicense,driverLicenseDate,ssiNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicense)
        cy.get(this.selectorsList().genericField).eq(7).clear().click().type(driverLicenseDate)
        //cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        //cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    fillStatus(birthDate){
        cy.get(this.selectorsList().genericField).eq(8).clear().click().type(birthDate)
        cy.get(this.selectorsList().genericDropdonwField).eq(0).click()
        cy.get(this.selectorsList().genericDropdownList).eq(0).click().wait(500)
        cy.get(this.selectorsList().genericDropdonwField).eq(0).click()
        cy.get(this.selectorsList().genericDropdownList).eq(26).click()
        cy.get(this.selectorsList().genericDropdonwField).eq(1).click()
        cy.get(this.selectorsList().genericDropdownList).eq(2).click()
        //cy.get(this.selectorsList().genericField).eq(12).clear().type('militaryTest')
        cy.get(this.selectorsList().smokerCheckbox).eq(0).click()
    }

    fillCustomField(testField){
        cy.get(this.selectorsList().genericDropdonwField).eq(2).click()
        cy.get(this.selectorsList().genericDropdownList).eq(3).click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(testField)
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        //cy.get("body").should("contain", "Successfully Updated")
        cy.get(this.selectorsList().toastCloseButton)
    }
}

export default MyInfoPage