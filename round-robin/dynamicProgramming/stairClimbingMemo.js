const climbStairsOrigin = function(n) {
  if (n == 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

const memoize = function(func) {
  let cache = {};
  return input => {
    if (cache[input]) return cache[input];
    cache[input] = func(input);
    return cache[input];
  };
};

let climbStairs = memoize(climbStairsOrigin);
let output = climbStairs(8, 2);
console.log(output);
