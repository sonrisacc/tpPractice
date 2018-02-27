const combinationSum = function(candidates, target) {
  let res = 0;
  let partial = [];
  if (candidates == null || candidates.length == 0) return res;
  // candidates.sort((a, b) => a - b);
  helper(candidates, res, partial, target, 0);
  console.log(res);
  return res;
};

function helper(candidates, result, partial, sum, index) {
  if (sum < 0) return;
  if (sum == 0) {
    result++;
    // result.push(partial.slice());
    return;
  }
  for (let i = index; i < candidates.length; i++) {
    // if (i > index && candidates[i] == candidates[i - 1]) continue;
    // if (candidates[i] <= sum) {
    partial.push(candidates[i]);
    helper(candidates, result, partial, sum - candidates[i], i);
    partial.pop();
    // }
  }
}

combinationSum([2, 7, 6, 3], 7);
