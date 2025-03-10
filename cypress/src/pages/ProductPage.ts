import BasePage from '../base/BasePage';
import Header from '../components/Header';

export default class ProductPage extends BasePage {
    public header: Header = new Header();

    constructor() {
        super('prod.html');
    }

    private get productName(): Cypress.Chainable {
        return cy.get('.name');
    }

    private get addToCartButton(): Cypress.Chainable {
         return cy.get('.col-sm-12 > .btn');
    }

    public checkProductName(titleProduct: string): this {
        this.productName.contains(titleProduct);
        return this;
    }

    public clickAddToCardButton(): this {
        this.addToCartButton.contains('Add to cart').click();
        return this;
    }

    public checkAlertWindow(): this {
        // updated by Belle - To use custom command .checkAlert()
        // cy.on('window:alert', (message) => {
        //     expect(message).to.contains('Product added');
        // });
        cy.checkAlert('Product added');
        
        // added by Belle - To allow time for cart update before moving forward
        cy.wait(1000); 
        return this;
    }
}