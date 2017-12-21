const expect = require('chai').expect;
const translateRomanNumeral = require('./index');

xdescribe('Check translateRomanNumeral', () => {
  it('Should not be case sensitive', () => {
    expect(translateRomanNumeral('iv')).to.equal(4);
    expect(translateRomanNumeral('IV')).to.equal(4);
  });

  it('should translate multiple digits being added', function() {
    expect(translateRomanNumeral('II')).to.eql(2);
    expect(translateRomanNumeral('VI')).to.eql(6);
    expect(translateRomanNumeral('VII')).to.eql(7);
    expect(translateRomanNumeral('XV')).to.eql(15);
  });

  it('to translate subtractive notation', function() {
    expect(translateRomanNumeral('IV')).to.eql(4);
    expect(translateRomanNumeral('XIV')).to.eql(14);
    expect(translateRomanNumeral('MCM')).to.eql(1900);
  });

  it('to translate complex examples (e.g. years used in Wikipedia page on roman numerals)', function() {
    expect(translateRomanNumeral('MCMLIV')).to.eql(1954);
    expect(translateRomanNumeral('MCMXC')).to.eql(1990);
    expect(translateRomanNumeral('MMVIII')).to.eql(2008);
    expect(translateRomanNumeral('MDCCCCX')).to.eql(1910);
    expect(translateRomanNumeral('MCMX')).to.eql(1910);
  });
});
