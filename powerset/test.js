const expect = require('chai').expect;
const powerset = require('./index');

describe('Check powerset', () => {
  it('Should give all options', () => {
    let result = ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'];
    expect(powerset('abc')).to.equal(result);
  });
});
