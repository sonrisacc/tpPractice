const should = require('chai').should();
const Tree = require('./index');

describe('Check tree', () => {
  it('should be a function', () => {
    Tree.should.be.a('function');
  });
});
