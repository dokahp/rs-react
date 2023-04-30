/// <reference types="cypress" />

describe('not found page', () => {
  beforeEach(() => {
    cy.visit('/not-found-page');
  });

  it('renders not found page error', () => {
    cy.contains('Error404');
  });
});
