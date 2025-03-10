import BasePage from '../base/BasePage';

export default class CartPage extends BasePage {
    private get productItemInCart(): Cypress.Chainable {
        return cy.get('.success');
    }
    public checkThatProductVisibleInCart(): this {
        this.productItemInCart.should('be.visible');
        return this;
    }
    public checkFirstProductThatAddedInCard(titleProduct: string): this {
        this.productItemInCart.contains(titleProduct);
        return this;
    }

    // added by Belle - To verify number of items added in the cart
    public checkItemCountInCart(itemCount: number): this {
        this.productItemInCart.should('have.length', itemCount);
        return this;
    }

    // added by Belle - To click the Place Order button 
    public clickPlaceOrderButton(): this {
        cy.get('[data-target="#orderModal"]').should('be.visible').click();
        return this;
    }
}