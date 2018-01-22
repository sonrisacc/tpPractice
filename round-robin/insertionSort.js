function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (result.length < right.length + left.length) {
    if (left[i] < right[j] || j >= right.length) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result;
}

const mergeSort = function(arr) {
  // Your code here.
  if (arr.length <= 1) return arr;
  let center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([4, 7, 4, 3, 9, 1, 2]));

// divide array in half, till the element is [[1],[2]..]
// merge them left arr, right arr
// when i = 0; j = 0
// Math.max(arr[i],arr[j]) -->
// push max to [result]
