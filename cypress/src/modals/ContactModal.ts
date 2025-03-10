import BaseModal from '../base/BaseModal';
import HomePage from '../pages/HomePage';

export default class ContactModal extends BaseModal {

    // updated by Belle - To include logic for contact form
    constructor() {
        super('.modal-dialog');
    }
        
    private get inputContatEmailField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #recipient-email`);
    }
        
    private get inputContactNameField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #recipient-name`);
    }
    
    private get inputMessageTextField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #message-text`);
    }
        
    private enterEmail(contactEmail: string): this {
        this.inputContatEmailField
            .should('be.visible')
            .clear()
            .type(contactEmail);
        return this;
    }
        
    private enterName(contactName: string): this {
        this.inputContactNameField
            .should('be.visible')
            .clear()
            .type(contactName);
        return this;
    }
     
    private enterMessage(msgText: string): this {
        this.inputMessageTextField
            .should('be.visible')
            .clear()
            .type(msgText);
        return this;
    }
    private clickOnSendMsgButton(): void {
        this.modalFooterButton
            .contains('Send message')
            .click();
    }
        
    public ContactWithDetails(contactEmail: string, contactName: string, msgText: string): HomePage {
        this.enterEmail(contactEmail);
        this.enterName(contactName);
        this.enterMessage(msgText);
        this.clickOnSendMsgButton();
        return new HomePage();
    }
    // ** end of update
    
    public checkFooterSendButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}