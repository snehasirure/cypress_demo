import  * as testdata  from "../fixtures/login.json";

export class LoginAction {

    withCredentials(username, password) {
        cy.visit(testdata.host);

        cy.get('#user-name').type(username);
        cy.get('#password').type(password, {log: false});
        cy.get('#login-button').click();
    }

    loginWithValidCredentials() {
        cy.visit(testdata.host);
        cy.get('#user-name').type(testdata.username);
        cy.get('#password').type(testdata.password);
        cy.get('#login-button').click();
    }
}
