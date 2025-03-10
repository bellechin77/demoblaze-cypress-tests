// added by Belle - custom command to retrieve a link from navigation menu
declare namespace Cypress {
    interface Chainable {
      getNavLink(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
    }
}

// added by Belle - custom command to assert an alert message
declare namespace Cypress {
  interface Chainable {
    checkAlert(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
} 

Cypress.Commands.add("getNavLink", (selector) => {
    return cy.get('.nav-link').contains(selector)
})

Cypress.Commands.add("checkAlert", (alertMessage) => {
  cy.on('window:alert', (message) => {
    expect(message).to.contains(alertMessage)
    return true
  })
})