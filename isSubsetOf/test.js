// const expect = require('chai').expect;
const should = require('chai').should();
const isSubsetOf = require('./index');

describe('Check isSubsetOf', () => {
  it('should be a function', () => {
    isSubsetOf.should.be.a('function');
  });

  it('should check if a is a subset of input', () => {
    const a = ['commit', 'push'];
    a.isSubsetOf(['commit', 'rebase', 'push', 'blame']).should.equal(true);
  });
  it('should ignore duplicate if it exists', () => {
    const b = ['merge', 'reset', 'reset'];
    b.isSubsetOf(['reset', 'merge', 'add', 'commit']).should.equal(true);
  });
  it('should say not if there are elements that not exists', () => {
    const c = ['commit', 'revert'];
    c.isSubsetOf(['reset', 'merge', 'add', 'commit']).should.equal(false); // false
  });
});
