// Belle - Shopping Cart test using the OOP methods from the parent code

import HomePage from '../src/pages/HomePage';
import ProductPage from '../src/pages/ProductPage';

describe('Shopping Cart test', () => {

    const homePage: HomePage = new HomePage();

    // Before all tests, navigate to the base URL 
    before(() => {
        homePage.visit();
    });

    // After all tests, verify that the cart contains 3 items and the Order button is visible
    after(() => {
        homePage.header.clickOnCartButton()
            .checkThatProductVisibleInCart()
            .checkItemCountInCart(3)
            .clickPlaceOrderButton();
        
        homePage.orderModal
            .PlaceOrder('John Doe', 'Spain', 'Barcelona', '1234567890123456', '12', '30');
            
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
        homePage.categories.clickOnPhonesCategoryButton()
            .clickOnFirstTitleProductItem()
            .clickAddToCardButton()
            .checkAlertWindow()
            .header.clickOnHomeButton();
    
        // Select the "Laptops" category and add the last product to the cart
        homePage.categories.clickOnLaptopsCategoryButton()
            .clickOnLastTitleProductItem()
            .clickAddToCardButton()
            .checkAlertWindow()
            .header.clickOnHomeButton();
    
        // Select the "Monitors" category and add a specific monitor to the cart
        const productTitle = 'Apple monitor 24';
        homePage.categories.clickOnMonitorsCategoryButton()
            .clickOnSpecificTitleProductItem(productTitle)
            .clickAddToCardButton()
            .checkAlertWindow();
    });
});