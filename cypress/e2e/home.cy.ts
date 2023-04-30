/// <reference types="cypress" />

describe('home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('It displays default videos', () => {
    cy.get('img').should('have.length', 25);
  });

  it('It display modal', () => {
    cy.get('img').eq(0).click();
    cy.contains('View full');
    cy.contains('Description');
  });
});
