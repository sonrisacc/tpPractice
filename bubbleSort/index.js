// iterate through the arr
// [10,3,1,2,5,4,7,9]
// it takes the first one, compare to the second

// var temp

const swapOp = function(j, k, inputArr) {
  let temp = inputArr[j];
  inputArr[j] = inputArr[k];
  inputArr[k] = temp;
  return inputArr;
};
const bubbleSort = function(arr) {
  // Your code here.
  while (true) {
    let swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap = true;
        swapOp(i, i + 1, arr);
      }
    }
    if (!swap) break;
  }
  return arr;
};

console.log(bubbleSort([5, 1, 7, 2, 4]));

// const swap = function(i, j, array) {
//   console.log('initial', array);
//   array[i] ^= array[j];
//   console.log('flipped', array);
//   array[j] ^= array[i];
//   console.log('twice', array);
//   array[i] ^= array[j];
//   console.log('result', array);
//
//   return array;
// };
//
// swap(0, 1, [5, 6]);
