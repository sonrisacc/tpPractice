function climbStairs(n, k) {
  let output = [];
  let steps = [];
  helper(output, steps, k, n);
  return output;
}

function helper(output, steps, k, left) {
  if (left === 0) {
    output.push(steps.slice());
  } else {
    console.log('k', k);
    for (let i = 1; i < k + 1; i++) {
      if (i <= left) {
        steps.push(i);
        console.log('steps', steps);
        helper(output, steps, k, left - i);
        steps.pop();
      }
    }
  }
}

let output = climbStairs(4, 2);
console.log(output);
