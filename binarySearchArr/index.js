/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

const binarySearch = function(array, target) {
  let hi = array.length - 1;
  let low = 0;
  let center = Math.floor((low + hi) / 2);
  while (low < center && center < hi) {
    if (array[center] === target) return center;
    if (array[center] < target) {
      low = center;
      center = Math.floor((low + hi) / 2);
    } else {
      hi = center;
      center = Math.floor((low + hi) / 2);
    }
  }
  return null;
};

// input: sorted array
// out: null/ number
// c: log
// e:
const index1 = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index1 === 3); // 3
const index2 = binarySearch([1, 2, 3, 4, 5], 8);
console.log(index2 === null); // null
