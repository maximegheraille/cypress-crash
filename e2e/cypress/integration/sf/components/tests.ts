/// <reference types="Cypress" />

describe(`test`, () => {
  describe.only('check test', () => {
    it('check test', () => {
      const person = {
        name: 'Joe',
        age: 20,
      };
      assert.isObject(person, 'value is object');
    });
  });
});
