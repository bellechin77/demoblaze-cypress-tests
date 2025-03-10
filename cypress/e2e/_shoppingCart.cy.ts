// Belle - Shopping Cart test (without using the OOP methods from the parent code)

describe('Shopping Cart test', () => {

    // Before all tests, navigate to the base URL and ensure the category menu is visible
    before(() => {
        cy.visit(`${Cypress.config('baseUrl')}`, {
            // Prevent test failure on non-200 responses
            failOnStatusCode: false,});
        
        // Verify that the current URL matches the base URL
        cy.url().should('include', `${Cypress.config('baseUrl')}`);

        // Ensure the category menu is visible on the homepage
        cy.get('[id="itemc"]').should('be.visible');
    });

    // After all tests, verify that the cart contains 3 items and complete the order
    after(() => {
        // Navigate to the cart page
        cy.getNavLink('Cart').click();

        // Ensure that the cart table is visible
        cy.get('.success').should('be.visible');

        // Verify that exactly 3 products have been added to the cart
        cy.get('.success').should('have.length', 3);

        // Complete the orde
        cy.contains('Place Order').should('be.visible').click();
        
        // Fill in the order details
        cy.get(`#name`)
            .should('be.visible')
            .clear()
            .type('John Doe');

        cy.get(`#country`)
            .should('be.visible')
            .clear()
            .type('Spain');

        cy.get(`#city`)
            .should('be.visible')
            .clear()
            .type('Barcelona');

        cy.get(`#card`)
            .should('be.visible')
            .clear()
            .type('1234567890123456');
        
        cy.get(`#month`)
            .should('be.visible')
            .clear()
            .type('12');
        
        cy.get(`#year`)
            .should('be.visible')
            .clear()
            .type('30');
            
        // Click the 'Purchase' button 
        cy.get('button').contains('Purchase').click();

        // Assert that the confirmation popup appears
        cy.get('.sweet-alert.showSweetAlert.visible').should('be.visible');

        // Assert that the h2 element contains the correct text
        cy.get('.sweet-alert.showSweetAlert.visible h2').should('have.text', 'Thank you for your purchase!');

        // Click the "OK" button in the success popup to close it
        cy.get('.sa-confirm-button-container button.confirm').contains('OK').click();

        // Verify redirection back to the homepage after closing the popup
        cy.url().should('include', `${Cypress.config('baseUrl')}`);    
    });

    // Test case: Add multiple products to the cart and verify the product is successfully added
    it('Add multiple products to the cart and verify', () => {
        // Select the "Phones" category and add the first product to the cart
        cy.get('[id="itemc"]').contains('Phones').click();
        cy.get('.card-title').find('a').first().should('be.visible').click({force:true});
        cy.contains('Add to cart').click();
        
        // Verify that an alert confirms the product was added
        cy.checkAlert('Product added');

        // Wait for cart update before proceeding
        cy.wait(1000);
    
        // Navigate back to the home page to select another product category
        cy.getNavLink('Home').click();
 
        // Select the "Laptops" category and add the last product to the cart
        cy.get('[id="itemc"]').contains('Laptops').click();
        cy.get('.card-title').find('a').last().should('be.visible').click({force:true});
        cy.contains('Add to cart').click();

        // Verify the alert confirmation for product addition
        cy.checkAlert('Product added');

        // Allow time for the cart to update
        cy.wait(1000);
    
        // Navigate back to the home page to add another product
        cy.getNavLink('Home').click();
    
        // Select the "Monitors" category and add a specific monitor to the cart
        const productTitle = 'Apple monitor 24';
        cy.get('[id="itemc"]').contains('Monitors').click();
        cy.get('.card-title').find('a').contains(productTitle).should('be.visible').click({force:true});
        cy.contains('Add to cart').click();

        // Verify the alert confirmation for the monitor addition
        cy.checkAlert('Product added');

        // Allow cart update before completing the test
        cy.wait(1000);
    });
});