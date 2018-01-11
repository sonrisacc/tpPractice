const MedianStream = function() {
  this.heapStorage = [];
  this.compare = function(i, j) {
    return i < j;
  };
};

const swap = function(targetIndex, curIndex, inputArr) {
  console.log(inputArr);
  let temp = inputArr[curIndex];
  inputArr[curIndex] = inputArr[targetIndex];
  inputArr[targetIndex] = temp;
};

MedianStream.prototype = {
  insert: function(value) {
    this.heapStorage.push(value);

    let childIndex = this.size() - 1;
    if (childIndex === 0) return;

    // if (childIndex % 2 === 0) {
    //   let siblingIndex = childIndex - 1;
    //   let siblingValue = this.heapStorage[childIndex - 1];
    //   // console.log('compare', this.compare(parentValue, childValue));
    //   if (this.compare(childValue, siblingValue)) {
    //     swap(siblingIndex, childIndex, this.heapStorage);
    //   }
    // }
    let parentIndex = Math.floor((childIndex - 1) / 2);

    while (
      childIndex > 0 &&
      this.compare(this.heapStorage[childIndex], this.heapStorage[parentIndex])
    ) {
      swap(parentIndex, childIndex, this.heapStorage);
      childIndex = parentIndex;
      parentIndex = Math.floor(childIndex / 2);

      let shouldSwap = this.compare(
        this.heapStorage[childIndex + 1],
        this.heapStorage[childIndex]
      );

      if (shouldSwap) {
        swap(childIndex + 1, childIndex, this.heapStorage);
      }
    }

    childIndex = this.size() - 1;
    parentIndex = Math.floor((childIndex - 1) / 2);
    while (
      childIndex > parentIndex &&
      this.compare(
        this.heapStorage[childIndex],
        this.heapStorage[childIndex - 1]
      )
    ) {
      swap(childIndex - 1, childIndex, this.heapStorage);
      childIndex--;
      parentIndex = childIndex - 1;
    }
  },
  peekMedian: function() {
    if (this.size() === 0) return 0;
    if (this.size() === 1) return this.heapStorage[0];

    if (this.size() % 2 !== 0) {
      console.log(Math.ceil(this.size() / 2 - 1));
      return this.heapStorage[Math.ceil(this.size() / 2 - 1)];
    } else if (this.size() % 2 === 0) {
      let left = this.heapStorage[this.size() / 2];
      let right = this.heapStorage[this.size() / 2 - 1];

      return (left + right) / 2;
    }
  },
  size: function() {
    return this.heapStorage.length;
  }
};

const mStream = new MedianStream();
mStream.insert(3);
mStream.insert(3);
mStream.insert(3);
mStream.insert(3);
mStream.insert(3);
mStream.peekMedian();
console.log(mStream.heapStorage);
console.log(mStream.peekMedian());
// => 2
// mStream.insert(5);
// mStream.insert(4);
// mStream.peekMedian();
// => 3

// make a binaryHeap

// peerkMedian would be :
// if total length is odd
// let leftIndex = Math.floor(arrLength/2
// let right = leftIndex + 1
// avergae of this two
// if even
// take the middle number

// if parentIndex know is i
// childIndex = i* 2 +1 or 2

// if childIndex is j
// parentIndex Math.floor(j /2)
