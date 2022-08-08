
import { LoginAction } from "../../actions/Login-action";
import { ShoppingCart } from "../../page-objects/shopping-cart";
import { SortAddItem } from "../../page-objects/sort-add-item";
import { CheckoutInformation } from "../../page-objects/checkout-information";
import { CheckoutConfirmation } from "../../page-objects/checkout-confirmation";
import { BackHome } from "../../page-objects/back-home";

describe('Place items in cart and checkout', () => {

    const login = new LoginAction()
    const sortitem = new SortAddItem()
    const cart = new ShoppingCart()
    const checkout = new CheckoutInformation()
    const checkoutconfirm = new CheckoutConfirmation()
    const back = new BackHome()

    beforeEach(() => {
        login.loginWithValidCredentials()
        sortitem.addItemToCart('Sauce Labs Backpack')
        sortitem.addItemToCart('Sauce Labs Fleece Jacket')
        cart.open()
        cy.wait(2000)

    })

    describe('Checkout with neccessary details ', () => {

        beforeEach(() => {
            cart.initiateCheckout()
            cy.wait(2000)
        })


        it('Continue without filling neccessary details', () => {
            checkout.PersonalDetails("", "", "")
            checkout.Continue()
            checkout.error().should('contain.text', 'Error: First Name is required').should('be.visible')


        });

        it('Fill neccessary details and continue', () => {

            checkout.PersonalDetails("Eric", "Hoff", "1356")
            checkout.Continue()
            
        });

        it('Thank you message should be shown after completing order', () => {
            checkout.PersonalDetails("Eric", "Hoff", "1356")
            checkout.Continue()
            checkoutconfirm.finishCheckout()
            checkoutconfirm.message().should('contain.text', 'THANK YOU FOR YOUR ORDER')

        })

        it('Back home if user wants to continue shopping', () =>{

            checkout.PersonalDetails("Eric", "Hoff", "1356")
            checkout.Continue()
            checkoutconfirm.finishCheckout()
            back.home().click()

        });

    });

})





