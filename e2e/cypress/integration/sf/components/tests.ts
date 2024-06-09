/// <reference types="Cypress" />

describe(`test`, () => {
  before(() => {
    cy.visit('https://www.google.com/');
    cy.injectAxe();
  });

  beforeEach(() => {});

  describe.only('check test', () => {
    it('check test', () => {
      const person = {
        name: 'Joe',
        age: 20,
      };
      assert.isObject(person, 'value is object');
    })
  });
});
