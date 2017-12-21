// const expect = require('chai').expect;
const should = require('chai').should();
const LinkedList = require('./index');

xdescribe('Check LinkedList', () => {
  it('should be a function', () => {
    LinkedList.should.be.a('function');
  });

  it('should be implemented using the pseudoclassical pattern', function() {
    LinkedList.prototype.addToTail.should.be.a('function');
    LinkedList.prototype.removeHead.should.be.a('function');
    LinkedList.prototype.contains.should.be.a('function');
  });
});
