const nthFibonacci = function(n) {
  // TODO: implement me!
  if (n == 0) return 0;
  if (n == 1) return 1;
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const memoize = function(func) {
  let cache = {};
  return input => {
    if (cache[input]) return cache[input];
    cache[input] = func(input);
    return cache[input];
  };
};

let memoizedNthFib = memoize(nthFibonacci);
let output = memoizedNthFib(20);
console.log(output);
// the 3rd nthFibonacci

/*
n = 1   --> result = 0
n = 2   --> result = 1
n = 3 --> nthFibonacci(1) + nthFibonacci(2)
n = 4 --> nthFibonacci(3) + nthFibonacci(2)


nthFibonacci(10)
if(n =1) return 0;
if(n =2) return 1;
return nthFibonacci(n-1) + nthFibonacci(n-2)

we memoize the result of previous nthFibonacci function's result
to save time for future calculation

*/
