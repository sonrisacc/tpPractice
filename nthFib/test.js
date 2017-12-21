const chai = require('chai');
const nthFib = require('./index.js');

const should = chai.should();

xdescribe('Check nthFid', () => {
  it('should be a function', () => {
    nthFib.should.be.a('function');
  });

  it('the first should be 0 ', () => {
    nthFib(0).should.equal(0);
    nthFib(1).should.equal(1);
  });

  it('the common ones should be right ', () => {
    nthFib(2).should.equal(1);
    nthFib(3).should.equal(2);
    nthFib(4).should.equal(3);
    nthFib(5).should.equal(5);
  });

  it('should return the nth Fibonacci number for a given n', () => {
    nthFib(5).should.equal(5);
    nthFib(10).should.equal(55);
    nthFib(20).should.equal(6765);
  });
});
