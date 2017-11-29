// const expect = require('chai').expect;
const should = require('chai').should();
const maxProfit = require('./index');

describe('Check maxProfit', () => {
  it('should be a function', () => {
    maxProfit.should.be.a('function');
  });

  it('should be maxProfit', () => {
    maxProfit([7, 1, 5, 3, 6, 4]).should.be.equal(5);
  });
  it('should not buy', () => {
    maxProfit([7, 6, 5, 4, 3, 1]).should.be.equal(0);
  });
  it('should be maxProfit when there are same prices', () => {
    maxProfit([1, 6, 6, 6, 6, 2]).should.be.equal(5);
  });
  it('should be maxProfit when the min price wasnt avalible', () => {
    maxProfit([2, 4, 1, 1]).should.be.equal(2);
  });
});
