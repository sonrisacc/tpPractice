const expect = require('chai').expect;
const powerset = require('./index');

describe('Check powerset', () => {
  it('Should give all options', () => {
    let result = ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c'];
    expect(powerset('abc')).to.deep.equal(result);
  });
});
