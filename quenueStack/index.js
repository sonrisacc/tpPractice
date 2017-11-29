/**
 * Stack Class
 */

const Stack = function() {
  this.storage = [];
  this.totalIndex = 0;
};

Stack.prototype.push = function(input) {
  this.storage[this.totalIndex] = input;
  this.totalIndex++;
};

Stack.prototype.pop = function() {
  if (this.totalIndex) {
    this.totalIndex--;
    let returnValue = this.storage[this.totalIndex];
    delete this.storage[this.totalIndex];
    return returnValue;
  }
};
Stack.prototype.size = function() {
  return this.totalIndex;
};

/**
 * Queue Class
 */

const Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  this.inbox = new Stack();
  this.outbox = new Stack();
  this.size = 0;
};

// called to add an item to the `queue`
Queue.prototype.enqueue = function(value) {
  // TODO: implement `enqueue`
  this.inbox.push(value);
  this.size++;
};

// called to remove an item from the `queue`
Queue.prototype.dequeue = function() {
  // TODO: implement `dequeue`
  while (this.inbox.totalIndex > 0) {
    let temp = this.inbox.pop();
    this.outbox.push(temp);
  }
  this.size--;
  return this.outbox.pop();
};

// should return the number of items in the queue
Queue.prototype.size = function() {
  // TODO: imsplement `size`
  return this.size;
};

module.exports = Queue;

/*
const arr = [1, 2, 3];
delete arr[2];
console.log(arr.length); // 3, arr[3] === undefined
console.log(arr[2]);
*/
