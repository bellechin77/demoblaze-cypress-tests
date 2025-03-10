// Belle - To include logic for order form

import BaseModal from '../base/BaseModal';
import HomePage from '../pages/HomePage';

export default class OrderModal extends BaseModal {

    constructor() {
        super('.modal-dialog');
    }
        
    private get inputNameField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #name`);
    }
        
    private get inputCountryField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #country`);
    }
    
    private get inputCityField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #city`);
    }

    private get inputCardField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #card`);
    }

    private get inputMonthField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #month`);
    }

    private get inputYearField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #year`);
    }

    private enterName(customerName: string): this {
        this.inputNameField
            .should('be.visible')
            .clear()
            .type(customerName);
        return this;
    }
        
    private enterCountry(customerCountry: string): this {
        this.inputCountryField
            .should('be.visible')
            .clear()
            .type(customerCountry);
        return this;
    }
     
    private enterCity(customerCity: string): this {
        this.inputCityField
            .should('be.visible')
            .clear()
            .type(customerCity);
        return this;
    }

    private enterCard(cardNumber: string): this {
        this.inputCardField
            .should('be.visible')
            .clear()
            .type(cardNumber);
        return this;
    }  

    private enterMonth(cardMonth: string): this {
        this.inputMonthField
            .should('be.visible')
            .clear()
            .type(cardMonth);
        return this;
    }

    private enterYear(cardYear: string): this {
        this.inputYearField
            .should('be.visible')
            .clear()
            .type(cardYear);
        return this;
    }

    private clickOnPurchaseButton(): void {
        this.modalFooterButton
            .contains('Purchase')
            .click();
    }
        
    public PlaceOrder(custName: string, custCountry: string, custCity: string, custCardNo: string, cardMonth: string, cardYear: string): HomePage {
        this.enterName(custName);
        this.enterCountry(custCountry);
        this.enterCity(custCity);
        this.enterCard(custCardNo);
        this.enterMonth(cardMonth);
        this.enterYear(cardYear);
        this.clickOnPurchaseButton();
        return new HomePage();
    }
    
    public checkFooterSendButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}