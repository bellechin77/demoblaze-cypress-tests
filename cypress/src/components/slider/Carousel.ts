export default class Carousel {
    private carouselLocator: string = '#contcar';

    private get carouselNextButton(): Cypress.Chainable {
        return cy.get(`${this.carouselLocator} [class$="next"]`);
    }

    private get carouselPreviousButton(): Cypress.Chainable {
        return cy.get(`${this.carouselLocator} [class$="prev"]`);
    }

    private get carouselActiveItem(): Cypress.Chainable {
        return cy.get(`${this.carouselLocator} [class$="active"]>img`);
    }
    public checkActiveItem(numberSlide: string): this {
        this.carouselActiveItem.should('have.attr', 'alt', numberSlide);
        return this;
    }

    // updataed by Belle - To use selector with 'data-slide' attribute
    public clickCarouselNextButton(): this {
        // this.carouselNextButton.click();
        cy.get('[data-slide="next"]').click();
        return this;
    }

    public clickCarouselPreviousButton(): this {
        // this.carouselPreviousButton.click();
        cy.get('[data-slide="prev"]').click();
        return this;
    }
}