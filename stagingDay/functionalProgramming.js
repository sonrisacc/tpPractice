let arr = [1, 2, 3];

// input limiter
// function checkLimiter(input){

// }

// for each
// if limiter > cur, return false
function forEach(input, fn) {
  let result = [];
  for (a of input) {
    result.push(fn(a));
  }
  return result;
}

let arr2 = forEach(arr, checkLimiter.bind({}, 2));
let arr3 = forEach(arr, checkLimiter2(3));

function checkLimiter(limit, input) {
  return input > limit;
}

function checkLimiter2(limit) {
  // return function(limit, input) {
  //   return input > limit;
  // }.bind(this, limit);
  return checkLimiter.bind(this, limit);
}
console.log(arr3);
