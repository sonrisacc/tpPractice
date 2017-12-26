// const expect = require('chai').expect;
const should = require('chai').should();
const allAnagrams = require('./index');

describe('allAnagrams', function() {
  it('should exist', function() {
    should.exist(allAnagrams);
  });

  it('should return an array', function() {
    let result = allAnagrams('hello');
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single character', function() {
    let result = allAnagrams('a');
    result.should.be.eql(['a']);
  });

  it('should return an array of anagrams that contains `lives` for input `elvis`', function() {
    let result = allAnagrams('elvis');
    let found = result.indexOf('lives') !== -1;
    found.should.be.true;
  });

  it('should return an array of anagrams that contains `badcredit` for input `debitcard`', function() {
    let result = allAnagrams('debitcard');
    let found = result.indexOf('badcredit') !== -1;
    found.should.be.true;
  });

  it("should return all anagrams for 'ab'", function() {
    let expected = ['ab', 'ba'];
    let result = allAnagrams('ab');
    let found = false;
    let item;
    for (let i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      found.should.be.true;
    }
  });

  it("should return all anagrams for 'abc'", function() {
    let expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    let result = allAnagrams('abc');
    result.sort().should.be.eql(expected);
    let found = false;
    let item;
    for (let i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      found.should.be.true;
    }
  });

  it("should return all anagrams for 'apps'", function() {
    let expected = [
      'apps',
      'apsp',
      'aspp',
      'paps',
      'pasp',
      'ppas',
      'ppsa',
      'psap',
      'pspa',
      'sapp',
      'spap',
      'sppa'
    ];
    let result = allAnagrams('apps');
    let found = false;
    let item;
    let index;
    for (let i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      // we should have found the current expected anagram item in your
      // `result` array but we did not!
      found.should.be.true;
    }
  });

  it("should return all __unique__ anagrams for 'apps'", function() {
    // if you've gotten this far, you're doing awesome. this last test
    // is to check if you're returning an anagram array without duplicates
    let expected = [
      'apps',
      'apsp',
      'aspp',
      'paps',
      'pasp',
      'ppas',
      'ppsa',
      'psap',
      'pspa',
      'sapp',
      'spap',
      'sppa'
    ];
    let match = true;
    let result = allAnagrams('apps');
    result.length.should.be.equal(expected.length);
  });

  it("should not use underscore's `uniq`", function() {
    // this just checks your code for any usage of `_.uniq`
    // NOTE: this test _might_ still fail even if you technically don't use
    // `_.uniq` (ie., if you hae commented out code that still references
    // `_.uniq` in your solution.)
    let usesUniq = allAnagrams.toString().match(/\s*_\.uniq/) === null;
    usesUniq.should.be.true;
  });
});
