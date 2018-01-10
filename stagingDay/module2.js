const waterBlocks = function(blocks) {
  // TODO: Implement
  // find the first large number
  let result = 0;

  function findDrops(remain, left, right) {
    if (remain.length <= 0) return;
    // find left
    for (let i = 0; i < remain.length; i++) {
      if (remain[i] > remain[i + 1]) {
        left = i;
        console.log('left', left);
        break;
      }
    }
    // if [3,2,1]

    if (left === undefined) return 0;

    // find right
    for (let i = left + 1; i < remain.length; i++) {
      if (remain[i] > remain[i + 1]) {
        right = i;
        console.log('right', right);
        break;
      }
    }
    if (right === undefined) return 0;

    // find drops
    for (let i = left + 1; i < right; i++) {
      let min = remain[left] - remain[right] > 0 ? remain[right] : remain[left];
      let drop = min - remain[i];
      result += drop;
      // reset
      left = right;
      right = undefined;
    }
    let remainBlocks = remain.slice(left);
    console.log('remainBlocks', remainBlocks);
    findDrops(remainBlocks, left, right);
  }
  findDrops(blocks);
  return result;
};

const input = [5, 2, 3, 2, 1, 3];
const output = waterBlocks(input);
console.log(output);
// find max, and second biggest number
// add to result, reset, do this again
// out: number;
// input: array
// e:if all numbers are the same ==> 0
// if =>>[1,2,1]  second biggest
// iterate through the arr
// -----
// find left, index
// find right, index,
// iterate through arr[left] ---> arr [right]
// drop => min(left, right) - cur number
// result += drop
// -----
// reset, left = curRight
// right = next large value
// repeate ---
