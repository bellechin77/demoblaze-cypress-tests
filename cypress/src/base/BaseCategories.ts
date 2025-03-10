import ProductPage from '../pages/ProductPage';
export default abstract class BaseCategories {

    protected readonly CATEGORIES_CONTAINER: string = '#tbodyid';

    public get productsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} > div`);
    }
    public get titleProductsItem(): Cypress.Chainable {
        return cy.get(`${this.CATEGORIES_CONTAINER} .hrefch`);
    }

    public checkFirstProductItemIsVisible(): this {
        this.productsItem.first()
            .should('be.visible');
        return this;
    }

    public clickOnFirstTitleProductItem(): ProductPage {
        // updated by Belle - To use .first() method
        // this.titleProductsItem.eq(0).should('be.visible').click({force:true});
        this.titleProductsItem.first().should('be.visible').click({force:true});
        return new ProductPage();
    }

    // added by Belle - To click on last product item using .last() method
    public clickOnLastTitleProductItem(): ProductPage {
        this.titleProductsItem.last().should('be.visible').click({force:true});
        return new ProductPage();
    }

    // added by Belle - TO click on a specific product item using .contains() method
    public clickOnSpecificTitleProductItem(titleProduct: string): ProductPage {
        this.titleProductsItem.contains(titleProduct).should('be.visible').click({force:true});
        return new ProductPage();
    }
}