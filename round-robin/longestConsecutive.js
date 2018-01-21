function turnArrToObj(input) {
  let obj = {};
  for (let cur of input) {
    obj[cur] = 1;
  }
  return obj;
}

function longestConsecutive(nums) {
  if (nums.length <= 1) return nums.length;
  let numbsObj = turnArrToObj(nums);

  let maxResult = 0;

  // when key is number, the for in loop will atuo-sort the number
  // so the time complexity will be n
  for (let cur in numbsObj) {
    if (numbsObj[cur] == 1) {
      let counter = 0;
      let i = 0;
      while (numbsObj[Number(cur) + i]) {
        numbsObj[Number(cur) + i]++;
        i++;
        counter++;
      }
      maxResult = Math.max(maxResult, counter);
    }
  }
  return maxResult;
}

const input = [100, 4, 200, 1, 3, 2];
const output = longestConsecutive(input);
console.log(output);
