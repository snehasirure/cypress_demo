
import { LoginAction } from "../../actions/Login-action";
import { SortAddItem } from "../../page-objects/sort-add-item";

describe('Select products and add to cart', () => {

  const login = new LoginAction()
  const sortitem = new SortAddItem()

  beforeEach(() => {
    login.loginWithValidCredentials()
  })

  it('Verify sorting of items shows items as per selection', () => {
    sortitem.sortingOfItem().select('Name (Z to A)')
    sortitem.sortingOfItem().should('have.value', 'za')
    
    sortitem.sortingOfItem().select('Name (A to Z)')
    sortitem.sortingOfItem().should('have.value', 'az')
    
    sortitem.sortingOfItem().select('Price (low to high)')
    sortitem.sortingOfItem().should('have.value', 'lohi')
    
    sortitem.sortingOfItem().select('Price (high to low)')
    sortitem.sortingOfItem().should('have.value', 'hilo')
    cy.get('.inventory_list').find('.inventory_item').should('have.length', 6)
    cy.wait(2000)
    cy.log()


  })

  describe('User is able to add items to cart', () => {
    it('Add items to cart', () => {
      sortitem.addItemToCart('Sauce Labs Backpack')
      sortitem.shoppingCartBadge().should('contain', 1)
      sortitem.addToCartButtons().should('have.length', 5)
      sortitem.addItemToCart('Sauce Labs Fleece Jacket')
      sortitem.shoppingCartBadge().should('contain', 2)
      cy.wait(2000)
      cy.log()


    });

    it('Add many items by sorting items', () => {

      sortitem.sortingOfItem().select('Price (low to high)')
      sortitem.sortingOfItem().should('have.value', 'lohi')
      sortitem.addItemToCart('Sauce Labs Onesie')
      sortitem.addItemToCart('Sauce Labs Bolt T-Shirt')
      sortitem.shoppingCartBadge().should('contain', 2)

    });

    it('Remove items from the cart', ()=>{
      sortitem.addItemToCart('Sauce Labs Backpack')
      sortitem.addItemToCart('Sauce Labs Fleece Jacket')
      sortitem.removeItemFromCart('Sauce Labs Backpack')
      sortitem.shoppingCartBadge().should('contain', 1)

    })




  })
 

});





