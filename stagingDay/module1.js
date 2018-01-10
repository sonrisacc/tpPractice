const findPivot = function(array, start, end) {
  // TODO: Implement
  // big-O: n
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) return i + 1;
  }
  return null;

  // let temp = center element
  // temp > left,
  // temp = right center
  // temp > right end
  // start = start || 0;
  // end = end ||array.length
  // let center = (end - start) /2;
  // let temp = array[center];
  // while(temp < array[center + 1]){
  //   findPivot(array,center,end)
  // }

  // return temp
};

// o: 3
// input arr of str
// e: dupilated numbers

// cur is an str
// cur.charAt(0) ==> {d:i}
// obj[a] => index

// cur with after
// if after > cur

console.log('ab' > 'aa');
let input = ['apple', 'aear', 'cat'];
let output = findPivot(input);
console.log(output);
