export class CheckoutInformation {
    PersonalDetails(firstName, lastName, postCode) {
        if (firstName) {
            cy.get('#first-name').type(firstName)
        }
        if (lastName) {
            cy.get('#last-name').type(lastName)
        }
        if (postCode) {
            cy.get('#postal-code').type(postCode)
        }
        
    }
    Continue(){cy.get("#continue").click()}
    
    error() {
        return cy.get(".error")
    }
}