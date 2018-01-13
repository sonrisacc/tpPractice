const findPivot = function(array, start, end) {
  // TODO: Implement
  // solution1: big-O: n
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] > array[i + 1]) return i + 1;
  // }
  // return null;

  // solution2: big-o: log
  start = start || 0;
  end = end || array.length - 1;
  // compare to it's left, is it ordered?
  let keyIndex = Math.ceil((start + end) / 2);
  // means: cur > pre
  if (array[start] < array[keyIndex]) {
    if (keyIndex === end) return null;
    return findPivot(array, keyIndex, end);
  } else {
    if (start === keyIndex - 1) return keyIndex;
    return findPivot(array, start, keyIndex);
  }
};

console.log('ab' > 'aa');
let input = ['apple', 'bear', 'cat'];
let output = findPivot(input);
console.log(output);
