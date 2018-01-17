function root(x, n) {
  // your code goes here
  if (x <= 1) return x;
  let min = 0;
  let max = x;
  let temp = (min + max) / 2;

  let tempResult = toNthPower(temp, n) - x;

  if (tempResult == 0) return temp;
  while (Math.abs(tempResult) >= 0.001) {
    if (tempResult > 0) max = temp;
    if (tempResult < 0) min = temp;
    temp = (min + max) / 2;
    tempResult = toNthPower(temp, n) - x;
  }

  return _toFixed(temp);
}

function toNthPower(input, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * input;
  }
  return result;
}

function _toFixed(input) {
  let result = Number(input.toString().slice(0, 5));
  if (input.toString().charAt(4) >= 5) result += 0.001;
  return result;
}
