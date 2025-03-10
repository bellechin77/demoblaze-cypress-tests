// Belle - Signup test (without using the OOP methods from parent code)

describe('Test Signup Form', () => {
    // Before all tests, navigate to the base URL and open the Sign-up page
    before(() => {
        cy.visit(`${Cypress.config('baseUrl')}`, {
            // Prevent test failure on non-200 responses
            failOnStatusCode: false,});

        // Verify that the current URL matches the base URL
        cy.url().should('include', `${Cypress.config('baseUrl')}`);

        // Click on the "Sign up" navigation link
        cy.getNavLink('Sign up').click();
    });

    // After all tests, verify redirection to the home page and check the login link visibility
    after(() => {
        cy.location('href').should('include', `${Cypress.config('baseUrl')}`);
        
        // Ensure the "Log in" button is visible after sign-up flow
        cy.getNavLink('Log in').should('have.text', 'Log in');
    });

    // Test case: Successfully sign up a new user
    it('Signup a new user', () => {
        // Enter a unique username by appending the current timestamp
        cy.get(`#sign-username`)
            .should('be.visible')
            .clear()
            .type('testuser' + Date.now());
        
        // Enter password 
        cy.get(`#sign-password`)
            .should('be.visible')
            .clear()
            .type('testpassword');
        
        // Click the 'Sign up' button 
        cy.get('button').contains('Sign up').click();

        // Verify the success alert message after sign-up
        cy.checkAlert('Sign up successful');
    });
});