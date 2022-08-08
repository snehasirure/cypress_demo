export class SortAddItem {
    sortingOfItem() { return cy.get('[data-test="product_sort_container"]') }

    productNames() { return cy.get('.inventory_item_name'); }

    addToCartButtons() { return cy.get('[data-test^=add-to-cart]'); }

    addItemToCart(productName) {
        cy.contains('.inventory_item', productName).contains('Add to cart').click();
    }

    removeItemFromCart(productName) {
        cy.contains('.inventory_item', productName).contains('Remove').click();
    }

    removeFromCartButtons() { return cy.get('[data-test^=remove]'); }

    shoppingCartBadge() { return cy.get('.shopping_cart_badge'); }
}
