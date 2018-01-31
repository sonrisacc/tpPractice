const majorityElement = function(nums) {
  let counter = 0;
  let val = null;
  for (let cur of nums) {
    if (counter == 0) val = cur;
    if (cur === val) counter++;
    if (cur !== val) counter--;
  }
  return val;
};

const majorityElementOne = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    // n
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  let store = Object.keys(obj);
  store.sort((a, b) => {
    // nlogn
    return obj[b] - obj[a];
  });
  return store[0];
};

let output = majorityElement([3, 3, 4]);
console.log(output);
// 3:22

/*
Method one: speed n+nlogn, space linear
[1,2,3,4,5]
find an element that appears the most often
n = 10
             5     5
divide to l1[], l2[]
  all the same

iterate through half of the list,  obj[cur] ++
*/

/*
Method two
Boyer-Moore Majority Vote algorithm
set cur
set a counter: 0
// iterate through the arr
  // if counter = 0;
    // set pre = cur letter
  // if pre !== cur
     counter --
     else
     counter ++

     return pre
*/
