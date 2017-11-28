const expect = require('chai').expect;
const translateRomanNumeral = require('./index');

describe('Check translateRomanNumeral', () => {
  it('Should not be case sensitive', () => {
    expect(translateRomanNumeral('iv')).to.equal(4);
    expect(translateRomanNumeral('IV')).to.equal(4);
  });
});
