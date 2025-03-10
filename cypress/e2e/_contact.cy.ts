// Belle - Contact test (without using the OOP methods from the parent code)

describe('Test Contact Form', () => {

    // Before all tests, navigate to the base URL and open the Contact form
    before(() => {
        cy.visit(`${Cypress.config('baseUrl')}`, {
            // Prevent test failure on non-200 responses
            failOnStatusCode: false,});
        
        // Verify that the current URL matches the base URL
        cy.url().should('include', `${Cypress.config('baseUrl')}`);

        // Click on the "Contact" navigation link to open the contact form
        cy.getNavLink('Contact').click();
    });

    // After all tests, verify redirection to the home page
    after(() => {
        cy.location('href').should('include', `${Cypress.config('baseUrl')}`);
    });

    // Test case: Send a new message via the contact form
    it('Send a new message', () => {
        // Enter the recipient's email address
        cy.get(`#recipient-email`)
            .should('be.visible')
            .clear()
            .type('abc@example.com');

        // Enter the recipient's name
        cy.get(`#recipient-name`)
            .should('be.visible')
            .clear()
            .type('Abc co.');

        // Enter a message with a timestamp to ensure uniqueness
        cy.get(`#message-text`)
            .should('be.visible')
            .clear()
            .type('This is a test contact message '+ Date.now());

        // Click the 'Send message' button 
        cy.get('button').contains('Send message').click();

        // Verify the success alert message after submission
        cy.checkAlert('Thanks for the message');
    });
});