/// <reference types="Cypress" />

describe(`test`, () => {
  before(() => {
    cy.visit('https://www.google.com/');
    cy.injectAxe();
  });

  beforeEach(() => {});

  describe.only('check test', () => {
    it('check test', () => {
      cy.get('.k1zIA.rSk4se').should('exist');
    })
  });
});
