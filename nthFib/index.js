const nthFib = function(n) {
  const arr = [0, 1];
  for (; n > 0; n--) {
    arr.push(arr.shift() + arr[0]);
  }
  return arr[0];
};

module.exports = nthFib;
