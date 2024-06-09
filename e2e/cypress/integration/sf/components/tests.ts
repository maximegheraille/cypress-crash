/// <reference types="Cypress" />

describe(`test`, () => {
  it('check test', () => {
    const person = {
      name: 'Joe',
      age: 20,
    };
    assert.isObject(person, 'value is object');
  });
});
