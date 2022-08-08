export class CheckoutConfirmation {

    message() {
        return cy.get(".complete-header")
    }
    finishCheckout() { cy.contains("Finish").click() }
}