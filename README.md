# Demoblaze Cypress Tests

This repository contains end-to-end (E2E) test automation scripts for the DemoBlaze application using Cypress. The test suite automates user interactions such as product selection, adding items to the cart, and completing an order.

Repository: [https://github.com/bellechin77/demoblaze-cypress-tests](https://github.com/bellechin77/demoblaze-cypress-tests)   
Cloned from repository: [https://github.com/VadimNastoyashchy/demoblaze.com](https://github.com/VadimNastoyashchy/demoblaze.com)

## DemoBlaze Application Overview

DemoBlaze is a simple e-commerce web application that allows users to browse, add products to a shopping cart, and complete purchases. It serves as a demo platform for testing web automation and UI interactions.

**Key Features**:  
✅ Product Catalog – Users can browse categories like Phones, Laptops, and Monitors.  
✅ Shopping Cart – Add, remove, and view selected items before checkout.  
✅ User Authentication – Signup, login, and logout functionality.  
✅ Order Placement – Users can enter their details and complete purchases.  
✅ Popup Alerts & Modals – Notifications confirm actions like adding products or completing an order.

###  User Stories used for Test Automation added by Belle for the Cypress Badge Application

####  **(1) User Story: Sign Up for a New Account**

This story ensures that a new user can successfully create an account and receive confirmation of the action. 

| Given | When | Then |
| :---- | :---- | :---- |
| - A user is on the home page of the application. <br> - The user wants to create a new account. | - The user clicks on the "Sign up" link in the navigation bar. The sign-up form appears. <br> - The user enters a unique username and password. <br> - The user submits the sign-up form. | - The system displays an alert confirming that "Sign up successful". <br> - The user remains on the home page. <br> - The "Log in" button is visible in the navigation bar, indicating that the user can now log in with their his credentials. |

####  **(2) User Story: Contact Form Submission**

This user story ensures that a user can successfully send a message through the contact form and receive confirmation of the action.

| Given | When | Then |
| :---- | :---- | :---- |
| - A user is on the home page of the application. <br> - The user wants to send a message via the contact form. The user clicks on the “Contact” link in the navigation bar. | - The user enters a valid email address. <br> - The user enters his name. <br> - The user types a message in the text area. <br> - The user submits the contact form.  | - The system displays an alert message confirming "Thanks for the message". <br> - The user remains on the home page.  |

####  **(3) User Story: Adding Multiple Products to the Shopping Cart**

This user story outlines the key steps involved in adding products to the cart, confirming the order, and verifying the purchase success message.

| Given | When | Then |
| :---- | :---- | :---- |
| - A user is on the home page of the application. <br> - The category menu is visible, allowing the user to browse product categories. | - The user selects the Phones category and adds the first available phone to the cart. <br> - The user selects the Laptops category and adds the last available laptop to the cart. <br> - The user selects the Monitors category and adds a specific product, "Apple monitor 24," to the cart. <br> - The user navigates to the Cart page and verifies that all three selected products are present. <br> - The user proceeds to Place an Order, fills in the required details (Name, Country, City, Credit Card, Month, Year), and clicks on Purchase.  | - A confirmation popup appears with the message "Thank you for your purchase\!" <br> - The user clicks OK on the confirmation popup. <br> - The user is redirected back to the homepage, completing the purchase process.  |

### Test Cases added

| User story | Test case | Description |
| :---- | :---- | :---- |
| Sign Up for a New Account | signup.cy.ts | Inheriting parent code’s structure, OOP methods are used |
|  | \_signup.cy.ts | Not inheriting the parent code’s structure |
| Contact Form Submission | contact.cy.ts | Inheriting parent code’s structure, OOP methods are used |
|  | \_contact.cy.ts | Not inheriting the parent code’s structure |
| Adding Multiple Products to the Shopping Cart | shoppingCart.cy.ts | Inheriting parent code’s structure, OOP methods are used |
|  | \_shoppingCart.cy.ts | Not inheriting the parent code’s structure |

## 🚀 Getting Started

Follow the steps below to set up and run the tests on your local machine.

---
## 📌 Pre-requisites

Ensure you have the following installed before running the tests:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [npm](https://www.npmjs.com/) (Comes bundled with Node.js)
- [Git](https://git-scm.com/) (For cloning the repository)

To verify installations, run the following commands:
```sh
node -v    # Check Node.js version
npm -v     # Check npm version
git --version  # Check Git version
```

---
## 🛠 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/bellechin77/demoblaze-cypress-tests.git
   cd demoblaze-cypress-tests
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

---
## ⚙️ Configuration

Cypress settings can be configured via the `cypress.config.js` file. You may update settings such as:
- `baseUrl`: Default URL for test execution.
- `viewportWidth` and `viewportHeight`: Screen size for tests.
- `defaultCommandTimeout`: Time limit for Cypress commands.

---
## ▶️ Running Tests

### **Run Tests in Default Browser (headed mode):**
```sh
npx cypress open
```
This will open the Cypress Test Runner. Click on a test file to execute it.

### **Run Tests in Headless Mode:**
```sh
npx cypress run
```
This will run all tests in headless mode (without opening the browser UI).

### **Run Tests in a Specific Browser:**
Replace `chrome` with any supported browser (e.g., `firefox`, `edge`):
```sh
npx cypress run --browser chrome
```

### **Run a Specific Test File:**
```sh
npx cypress run --spec cypress/e2e/shoppingCart.cy.js
```
Replace `shoppingCart.cy.js` with the desired test file.

---
## 🛠 Debugging Tests

### **Common Debugging Tips:**
- Use `cy.pause()` to stop test execution at a certain point.
- Add `cy.debug()` for debugging in DevTools.
- Run tests in **headed mode** to visually inspect test execution.
- Check logs in the **Cypress Test Runner** and browser console for errors.
- Ensure correct **selectors** are used if elements are not found.

### **Debugging with Cypress UI:**
```sh
npx cypress open
```

---
## 📁 Project Structure

```
 demoblaze-cypress-tests/
 ├── cypress/
 │   ├── e2e/                       # Test files (organized per feature)
 │   ├───── api.cy.ts               # (parent code) API tests
 │   ├───── logIn_logOut.cy.ts      # (parent code) Login and Logout tests
 │   ├───── modal_window.cy.ts      # (parent code) Check modal windows on the page
 │   ├───── functionality.cy.ts     # (parent code) Functionality tests
 │   ├───── order.cy.ts             # (parent code) Order test
 │   ├───── signup.cy.ts            # (NEW) Signup test inheriting parent code using OOP 🆕 
 │   ├───── _signup.cy.ts           # (NEW) Signup test not inheriting parent code 🆕 
 │   ├───── contact.cy.ts           # (NEW) Contact test inheriting parent code using OOP 🆕 
 │   ├───── _contact.cy.ts          # (NEW) Contact test not inheriting parent code 🆕 
 │   ├───── shppingCart.cy.ts       # (NEW) Shopping Cart test inheriting parent code using OOP 🆕 
 │   ├───── _shoppingCart.cy.ts     # (NEW) Shopping Cart test not inheriting parent code 🆕  
 │   ├── src/                       # Reusable classes
 │   ├─── apiServices/
 │   ├───── Demoblaze.ts            # (parent code)
 │   ├─── base/
 │   ├───── BaseCategories.ts       # (parent code) - UPDATED BY BELLE 🔄
 │   ├───── BaseModal.ts            # (parent code)
 │   ├───── BasePage.ts             # (parent code) 
 │   ├─── components/
 │   ├───── categories/
 │   ├─────── Laptops.ts            # (parent code)
 │   ├─────── Monitors.ts           # (parent code)
 │   ├─────── Phone.ts              # (parent code)
 │   ├───── slider/
 │   ├─────── Carousel.ts           # (parent code) - UPDATED BY BELLE 🔄
 │   ├───── Categories.ts           # (parent code)
 │   ├───── Header.ts               # (parent code) - UPDATED BY BELLE 🔄
 │   ├─── modals/
 │   ├───── AboutUsModal.ts         # (parent code)
 │   ├───── ContactModal.ts         # (parent code) - UPDATED BY BELLE 🔄
 │   ├───── LoginModal.ts           # (parent code) 
 │   ├───── OrderModal.ts           # (NEW) - ADDED BY BELLE 🆕 
 │   ├───── SignupModal.ts          # (parent code) - UPDATED BY BELLE 🔄
 │   ├─── pages/
 │   ├───── CartPage.ts             # (parent code) - UPDATED BY BELLE 🔄
 │   ├───── HomePage.ts             # (parent code) - UPDATED BY BELLE 🔄
 │   ├───── ProductPage.ts          # (parent code) - UPDATED BY BELLE 🔄
 │   ├─── Account.ts                # (parent code)
 │   ├─── ApiSupport.ts             # (parent code)
 │   ├─── Credentials.ts            # (parent code)
 │   ├─── ICredentials.ts           # (parent code)
 │   ├── support/                   # Reusable commands and hooks
 │   ├─── commands.ts               # (parent code) - UPDATED BY BELLE 🔄
 │   ├─── e2e.ts                    # (parent code)
 │
 ├── cypress.config.js              # Cypress configuration file (parent code)
 ├── package.json                   # Project dependencies & scripts (parent code)
 ├── README.md                      # Project documentation - UPDATED BY BELLE 🔄
 └── .gitignore                     # Files to exclude from Git (parent code)
 └── .eslintrc.js                   # for ESLint configuration (parent code)
```

---
## 📝 Notes
- Ensure the **DemoBlaze application** is accessible at [`https://www.demoblaze.com`](https://www.demoblaze.com) before running tests.

---
## 📌 Resources
- [Cypress Documentation](https://docs.cypress.io/)
- [DemoBlaze Application](https://www.demoblaze.com/)

---
## Acceptance criteria

#### (1) Interactions with different web elements 

| Test | Interaction with different web elements |
| :---- | :---- |
| signup | Fill in username and password in the sign up form <br> ``cy.get(`#sign-username`).type('testuser' + Date.now())`` <br> ``cy.get(`#sign-password`).type('testpassword')`` <br> <br>Click the ‘Sign up’ button <br> ``cy.get('button').contains('Sign up').click()`` |
| contact | Fill in recipient email, recipient name and message text in the contact form <br> ``cy.get(`#recipient-email`).type('abc@example.com’)`` <br> ``cy.get(`#recipient-name`).type('Abc co.')`` <br> ``cy.get(`#message-text`).type('This is a test contact message')`` <br><br> Click the ‘Send message’ button <br> ``cy.get('button').contains('Send message').click()`` |
| shoppingCart | Select a specific category from the product catalog <br> ``cy.get('[id="itemc"]').contains('Monitors').click()`` <br><br> Select a specific product from the catalog  <br> ``cy.get('.card-title').find('a').contains(productTitle).should('be.visible').click({force:true})`` <br><br> Click the ‘Add to cart’ button on the product page <br> ``cy.contains('Add to cart').click()`` |

#### (2) Correct use of selectors/locators following best practices 

| Class from parent code | Changes made to use selectors following best practices |
| :---- | :---- |
| Carousel.ts | The use of `data-slide` attribute is isolated from CSS style or JS behavioral changes. <br> Select the next button in the carousel on the home page <br> ``cy.get('[data-slide="next"]')`` <br><br> Select the previous button in the carousel on the home page <br> ``cy.get('[data-slide="prev"]')`` |
| CartPage.ts | The use of `data-target` attribute is not coupled to the behavior or styling of an element. <br> Select the ‘Place Order’ button on the cart page <br> ``cy.get('[data-target="#orderModal"]')`` |

#### (3) Interactions with elements with a parent-child structure 

| Test | Interaction with parent-child structure |
| :---- | :---- |
| signup | Select the ‘Sign up’ link from the navigation menu <br> ``cy.get('.nav-link').contains(‘Sign up’)`` |
| contact | Select the ‘Contact’ link from the navigation menu <br> ``cy.get('.nav-link').contains(‘Contact’)`` |
| shoppingCart | Select a specific category from the product catalog <br> ``cy.get('[id="itemc"]').contains('Phones')`` <br> ``cy.get('[id="itemc"]').contains('Laptops')`` <br> ``cy.get('[id="itemc"]').contains('Monitors')`` |

#### (4) Interactions with sibling elements 

| Test | Interaction with sibling elements in the product catalog |
| :---- | :---- |
| shoppingCart | Select the first product in the catalog <br> ``cy.get('.card-title').find('a').first()`` |
| shoppingCart | Select the last product in the catalog <br> ``cy.get('.card-title').find('a').last()`` |
| shoppingCart | Select a specific product in the catalog <br> ``cy.get('.card-title').find('a').contains(productTitle)`` |

#### (5) Each test must have at least an assertion, at least one using should and one using expect

| Test | should() \- Implicitly retries until the assertion passes or times out | expect() \- Does NOT retry automatically |
| :---- | :---- | :---- |
| signup | Check visibility of an element <br> ``.should('be.visible')`` <br> Check an element has a specific text <br> ``.should('have.text', 'Log in')`` | Check the success alert message <br> ``cy.on('window:alert', (message) => { expect(message).to.contains(‘Sign up successful’)})`` |
| contact | Check visibility of an element <br> ``.should('be.visible')`` <br> Check an element contains a specific URL <br> ``.should('include', `${Cypress.config('baseUrl')}`)`` | Check the success alert message <br> ``cy.on('window:alert', (message) => { expect(message).to.contains(‘Thanks for the message’)})`` |
| shoppingCart | Check visibility of an element <br> ``.should('be.visible')`` <br> Check the number of elements in the cart <br> ``.should('have.length', 3)`` | Check the success alert message <br> ``cy.on('window:alert', (message) => { expect(message).to.contains(‘Product added’)})`` |

#### (6)Explain how you would debug/troubleshoot an error in your Cypress code (eg. element not found, undefined, …)

Here are the steps I would take to debug & troubleshoot Cypress errors:

| Step | Example  | Comment |
| :---- | :---- | :---- |
| Check Cypress error messages in the Test Runner | ``Timed out retrying after 4000ms: Expected to find element: `.submit-btn`, but never found it.``  | Cypress couldn't find .submit-btn within 4 seconds |
| Use `.should('be.visible')` to confirm element visibility | `cy.get('.submit-btn').should('be.visible')` | If this fails, the element might not be loading properly or the selector is wrong |
| Use `{ timeout: 10000 }` for Slow Elements | `cy.get('.submit-btn', { timeout: 10000 }).should('be.visible')` | This waits up to 10 seconds before failing |
| Debug Using `.log()` & `cy.pause()` | ``cy.get('.submit-btn').log('Checking button').click()`` <br> ``cy.pause()`` | This helps you inspect the test state before proceeding |
| Print Values with `cy.then(console.log)` | `cy.get('.product-name').invoke('text').then((text) => {   console.log('Product name:', text) })` | This helps debug missing or unexpected values |
| Use Cypress's built-in selector tool | `cy.get('#order-confirmation > h2').should('have.text', 'Thank you for your purchase!')`  | This ensures the selector is correct |
| Use `cy.debug()` to pause execution and inspect variables | `cy.get('.cart-items').debug()` | Open DevTools `(F12)` \> Console and inspect the logged element |
| Use `cy.wait()` to add a delay for asynchronous issues | `cy.wait(2000)` | This waits 2 seconds before continuing |
| Validate API Responses in Network Tab  | ``cy.intercept('GET', '/api/cart').as('getCart')`` <br> ``cy.wait('@getCart').its('response.statusCode').should('eq', 200);``  | This ensures the API responded correctly before continuing |
| Re-run with `--headed` or `--browser chrome` | `npx cypress run --headed --browser chrome`  | This allows better visibility of what’s happening |

#### (7) Hooks. At least one before and after hooks in one of the tests.

| Test | before()  | after() |
| :---- | :---- | :---- |
| signup | navigate to the base URL and open the sign-up form | verify redirection to the home page and check the login link visibility |
| contact | navigate to the base URL and open the contact form | verify redirection to the home page |
| shoppingCart | navigate to the base URL and ensure the category menu is visible | verify that the cart contains 3 items and complete the order |

#### (8) Custom commands. Create one and use it in a test; explain it with a comment or on the readme.

| Custom command | Purpose |
| :---- | :---- |
| `getNavLink()` | To select a link from the navigation menu |
| `checkAlert()` | To assert an alert message |

