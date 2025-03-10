import BaseModal from '../base/BaseModal';
import HomePage from '../pages/HomePage';

export default class SignUpModal extends BaseModal {

    // updated by Belle - To include logic for sign up
    constructor() {
        super('.modal-dialog');
    }
    
    private get inputUserNameField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #sign-username`);
    }
    
    private get inputPasswordField(): Cypress.Chainable {
        return cy.get(`${this.MODAL_BODY_CONTAINER} #sign-password`);
    }
    
    private enterEmail(userName: string): this {
        this.inputUserNameField
          .should('be.visible')
          .clear()
          .type(userName);
        return this;
    }
    
    private enterPassword(password: string): this {
        this.inputPasswordField
          .should('be.visible')
          .clear()
          .type(password);
        return this;
    }
    
    private clickOnSignUpButton(): void {
        this.modalFooterButton
          .contains('Sign up')
          .click();
    }
    
    public SignUpWithCredentials(name: string, password: string): HomePage {
        this.enterEmail(name);
        this.enterPassword(password);
        this.clickOnSignUpButton();
        return new HomePage();
    }
    // ** end of update
    
    public checkFooterSignUpButton(textButton: string): this {
        this.modalFooterButton.contains(textButton).should('be.visible');
        return this;
    }
}