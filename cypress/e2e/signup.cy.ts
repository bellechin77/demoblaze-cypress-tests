// Belle - Signup test using the OOP methods from the parent code

import HomePage from '../src/pages/HomePage'

describe('Signup test', () => {
    const homePage: HomePage = new HomePage();

    // Before all tests, navigate to the base URL and open the Sign-up page
    before(() => {
        homePage
            .visit()
            .checkPageUrl()
            .header.clickOnSignUpButton();
    });

    // After all tests, verify redirection to the home page and check the login link visibility
    after(() => {
        homePage
            .checkPageUrl()
            .header.checkLogInButton();
    });

    // Test case: Successfully sign up a new user
    it('Signup a new user', () => {
        // Enter a unique username and password in the signup form
        homePage.signUpModal
            .SignUpWithCredentials('testuser' + Date.now(), 'testpassword');
        
        // Verify the success alert message after sign-up
        cy.checkAlert('Sign up successful');
    });
});