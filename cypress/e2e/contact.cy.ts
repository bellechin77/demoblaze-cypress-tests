import HomePage from '../src/pages/HomePage'

// added by Belle - Contact test using the OOP methods from the parent code
describe('Contact test', () => {
    const homePage: HomePage = new HomePage();

    // Before all tests, navigate to the base URL and open the Contact form
    before(() => {
        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnContactButton();
    });

    // After all tests, verify redirection to the home page
    after(() => {
        cy.location('href').should('include', `${Cypress.config('baseUrl')}`);
    });

    // Test case: Send a new message via the contact form
    it('Send a new message', () => {

        // Enter the recipient's email address, sender's name, and a message
        homePage.contactModal
            .ContactWithDetails('abc@example.com', 'Abc co.', 'This is a test contact message');
        
        // Verify the success alert message after submission
        cy.checkAlert('Thanks for the message');
    });
});