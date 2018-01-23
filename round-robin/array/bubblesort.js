// -1 decend
// 1 acend
function swap(targetIndex, curIndex, arr) {
  let temp = arr[targetIndex];
  arr[targetIndex] = arr[curIndex];
  arr[curIndex] = temp;
}
const bubbleSort = function(input) {
  while (true) {
    let shouldSwap = false;
    for (let i = 0; i < input.length - 1; i++) {
      // 1,5,3,8,10
      if (input[i] > input[i + 1]) {
        shouldSwap = true;
        swap(i, i + 1, input);
      }
    }
    if (!shouldSwap) break;
  }
};

const arr = [2, 7, 1, 5];
bubbleSort(arr);
console.log(arr);
