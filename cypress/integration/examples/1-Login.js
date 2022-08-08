
/// <reference types="Cypress" />

import { LoginAction } from "../../actions/Login-action";
import { LoginForm } from "../../page-objects/login-form";
import  * as testdata  from "../../fixtures/login.json";

describe('When Login page', () => {

  const login = new LoginAction();
  const loginform = new LoginForm();

  describe('Login with valid user and password', () => {
    it('Login with valid user and password', () => {
      login.withCredentials(testdata.username, testdata.password)
      cy.wait(2000)
      cy.get('.inventory_list').find('.inventory_item').should('have.length', 6)
    })

    it('Login with invalid username and password', () => {
      login.withCredentials("abc", "abc123")
      loginform.errorMessage().should('contain', 'Username and password do not match any user')
      cy.wait(2000)
    })
  });

})