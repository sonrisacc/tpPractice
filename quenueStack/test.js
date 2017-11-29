const should = require('chai').should();
const Queue = require('./index.js');

describe('Check Queue', () => {
  it('should be a function', () => {
    Queue.should.be.a('function');
  });

  it('should be implemented using the pseudoclassical pattern', function() {
    Queue.prototype.enqueue.should.be.a('function');
    Queue.prototype.dequeue.should.be.a('function');
    Queue.prototype.size.should.be.a('function');
  });
});

describe('Check queueMethod', function() {
  it('should add an item to the queue', function() {
    let queue = new Queue();
    queue.enqueue('a');
    queue.size.should.equal(1);
  });
  it('should remove the oldest item from the queue', function() {
    let queue = new Queue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');
    queue.dequeue().should.be.equal('a');
  });
});
