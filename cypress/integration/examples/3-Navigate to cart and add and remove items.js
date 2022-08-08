
import { LoginAction } from "../../actions/Login-action";
import { ShoppingCart } from "../../page-objects/shopping-cart";
import { SortAddItem } from "../../page-objects/sort-add-item";

describe('Navigate to cart', () => {

    const login = new LoginAction()
    const sortitem = new SortAddItem()
    const cart = new ShoppingCart()

    beforeEach(() => {
        login.loginWithValidCredentials()
      })

      describe('Navigate to shopping cart after adding items', () =>{

          beforeEach(() => {
              sortitem.addItemToCart('Sauce Labs Backpack')
              sortitem.addItemToCart('Sauce Labs Fleece Jacket')
              cart.open()

          })

          it('Same items which added by user is shown in cart', () => {

            cart.items().should('contain.text','Sauce Labs Backpack')
            cart.items().should('contain.text','Sauce Labs Fleece Jacket')
            cart.items().should('have.length', 2)

            });

            it('Added unexpected items can be removed from cart and add new expected item', () => {
                cart.removeButtonFor('Sauce Labs Backpack')
                cart.continueshopping()
                sortitem.addItemToCart('Sauce Labs Bolt T-Shirt')
                sortitem.addItemToCart('Sauce Labs Bike Light')
                cart.open()
                cart.items().should('have.length', 3)


            });







      });
    







})




