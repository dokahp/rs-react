/// <reference types="cypress" />

describe('Your Videos page with form', () => {
  beforeEach(() => {
    cy.visit('/add');
  });

  it('it have form', () => {
    cy.get('.form-wrapper');
  });

  it('Form shows an error when form submitted with no data', () => {
    cy.get('.form').submit();
    cy.contains('You must upload an image');
    cy.contains('Video Title is required');
    cy.contains('Chanel Title is required');
    cy.contains('Publish date is required');
    cy.contains('Select video type');
    cy.contains('You must accept terms of usage');
  });

  it('You can upload a video', () => {
    cy.get('input')
      .eq(0)
      .selectFile('cypress/fixtures/video-img.jpeg', { force: true });
    cy.get('#inp').type('Video name');
    cy.get('input').eq(2).type('Channel name');
    cy.get('.datepicker').type('2024-06-01T08:30');
    cy.get('select').select('Video');
    cy.get('[for="I accept terms of usage*"]').click();
    cy.get('.form').submit();
    cy.contains('Video added');
    cy.get('.cards-wrapper');
  });
});
