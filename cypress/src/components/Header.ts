import CartPage from '../pages/CartPage';
export default class Header {

  // updated by Belle - To use custom command .getNavLink to locate the link from the navigation menu
  private get logInButton(): Cypress.Chainable {
    // return cy.get('#login2');
    return cy.getNavLink('Log in');
  }

  private get logOutButton(): Cypress.Chainable {
    // return cy.get('#logout2');
    return cy.getNavLink('Log out');
  }

  private get userNameInHeader(): Cypress.Chainable {
    return cy.get('#nameofuser');
  }

  private get headerButton(): Cypress.Chainable {
    return cy.get('.nav-link');
  }

  public clickOnLogInButton(): this {
    // this.logInButton.contains('Log in').click();
    this.logInButton.click();
    return this;
  }

  public clickOnContactButton(): this {
    // this.headerButton.contains('Contact').click();
    cy.getNavLink('Contact').click();
    return this;
  }

  public clickOnAboutUsButton(): this {
    // this.headerButton.contains('About us').click();
    cy.getNavLink('About us').click();
    return this;
  }
  public clickOnSignUpButton(): this {
    // this.headerButton.contains('Sign up').click();
    cy.getNavLink('Sign up').click();
    return this;
  }
  public clickOnCartButton(): CartPage {
    // this.headerButton.contains('Cart').click();
    cy.getNavLink('Cart').click();
    return new CartPage();
  }

  public checkUserName(userName: string): this {
    this.userNameInHeader.should('have.text', `Welcome ${userName}`);
    return this;
  }

  public clickOnLogOutButton(): this {
    this.logOutButton.click();
    return this;
  }

  public checkLogInButton(): this {
    this.logInButton.should('have.text', 'Log in');
    return this;
  }

  // added by Belle 
  public clickOnHomeButton(): this {
    cy.getNavLink('Home ').click();
    return this;
  }
}