// linked list
// {head:{ {value:xx,  next:{}}}, tail:{}}

const LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  // if nothing in the list,
  let node = this.makeNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function() {
  // if nothing is in the list
  // null === null => true
  if (!this.head) {
    return null;
  }

  let returnRemovedValue = this.head.value;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    return returnRemovedValue;
  }

  this.head = this.head.next;
  return returnRemovedValue;
};

LinkedList.prototype.contains = function(value) {
  let curNode = this.head;
  while (curNode) {
    if (curNode.value === value) {
      return true;
    }
    curNode = curNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(value) {
  let node = {};
  node.value = value;
  node.next = null;
  return node;
};
module.exports = LinkedList;
/*
const obj = { test: 3 };
const a = obj;
const b = obj;

a.test = 4;
console.log('obj', obj);
console.log('a', a);
console.log('b', b);

b.test = 5;
console.log('obj', obj);
console.log('a', a);
console.log('b', b);



let obj = { value: 3, next: { value: 8, next: null } };
let curNode = obj.next;
console.log('75', curNode);
curNode = curNode.next;
console.log('76', curNode);
console.log('77', obj);

obj.next = obj.next.next;
console.log(obj);
*/
