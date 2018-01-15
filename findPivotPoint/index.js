const findPivot = function(array, start, end) {
  // [4,5,6,7,8,1,2]
  // center
  start = start || 0;
  end = end || array.length - 1;
  center = Math.ceil((start + end) / 2);
  // start vs center
  // if start < center (sorted)
  if (array[start] < array[center]) {
    if (center === end) return null;
    return findPivot(array, center, end);
  } else if (array[start] > array[center]) {
    if (start + 1 === center) return center;
    return findPivot(array, start, center);
  }
  // start = center again
  // center = end   ---> end null
  // if start > center
  // 7,1,2 --> start + 1 = center  end
  // end = center again
  //
};

let input = ['bpple', 'aear', 'cat'];
let output = findPivot(input);
console.log(output);
