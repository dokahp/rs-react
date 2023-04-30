/// <reference types="cypress" />

describe('about page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('it renders about page', () => {
    cy.contains('About Project');
  });
  it('it have header and active link on about us', () => {
    cy.get('.active').should('contain.text', 'About Us');
  });
});
