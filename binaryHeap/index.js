const BinaryHeap = function() {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function(i, j) {
    return i < j;
  };
};

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function() {
  return this._heap[0];
};

BinaryHeap.prototype.insert = function(value) {
  // TODO: Your code here
  // if input value is larger than it's parent
  this._heap.push(value);

  let curIndex = this._heap.length - 1;
  let parentIndex = Math.floor((curIndex - 1) / 2);

  while (
    curIndex > 0 &&
    this._compare(this._heap[curIndex], this._heap[parentIndex])
  ) {
    swapNodes(curIndex, parentIndex, this);
    curIndex = parentIndex;
    parentIndex = Math.floor((curIndex - 1) / 2);
  }
};

BinaryHeap.prototype.removeRoot = function() {
  // TODO: Your code here
  let list = this._heap;
  let curIndex = this._heap.length - 1;
  let tempIndex = 0;
  let childIndex = this._getLesserChildIndex(tempIndex);
  swapNodes(curIndex, tempIndex, list);
  let removedRoot = list.pop();
  while (
    childIndex &&
    this._compare(this._heap[childIndex], this._heap[tempIndex])
  ) {
    swapNodes(childIndex, tempIndex, this);
    tempIndex = childIndex;
    childIndex = this._getLesserChildIndex(tempIndex);
  }
  return removedRoot;
};
BinaryHeap.prototype._getLesserChildIndex = function(parentIndex) {
  let childIndices = [parentIndex * 2 + 1, parentIndex * 2 + 2].filter(function(
    index
  ) {
    return index < this._heap.length;
  },
  this);

  if (this._compare(this._heap[childIndices[0]], this._heap[childIndices[1]])) {
    return childIndices[0];
  } else {
    return childIndices[1];
  }
};

const swapNodes = function(curIndex, parentIndex, theTree) {
  let list = theTree._heap;
  let cur = list[curIndex];
  list[curIndex] = list[parentIndex];
  list[parentIndex] = cur;
};
/*
const binaryHeap = new BinaryHeap();
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(9);
binaryHeap.insert(8);
binaryHeap.insert(1);

const compare = binaryHeap._compare;
const heap = binaryHeap._heap;
console.log(heap);
console.log(compare(heap[0], heap[1]));
console.log(compare(heap[0], heap[2]));
console.log(compare(heap[1], heap[3]));
console.log(compare(heap[1], heap[4]));
*/
