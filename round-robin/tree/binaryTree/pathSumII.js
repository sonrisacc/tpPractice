// not function properly
const pathSum = function(root, sum) {
  let stackArr = [];
  let result = [];
  let count = sum;
  let temp = [];
  if (!root) return result;
  while (!!root || stackArr.length > 0) {
    while (!!root) {
      temp.push(root.val);
      sum -= root.val;
      stackArr.push(root);
      root = root.left;
    }
    if (!root && sum == 0) {
      result.push(temp.slice());
    }
    let a = temp.pop();
    sum += a;
    root = stackArr.pop();
    root = root.right;
  }
  return result;
};
