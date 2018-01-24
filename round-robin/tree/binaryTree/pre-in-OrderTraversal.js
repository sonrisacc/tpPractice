const preorderTraversal = function(root) {
  let result = [];
  let arrStack = [];
  if (!root) return result;
  while (!!root) {
    result.push(root.val);
    if (!!root.right) arrStack.push(root.right);

    root = root.left;
    if (!root && arrStack.length > 0) {
      root = arrStack.pop();
    }
  }
  return result;
};

const inorderTraversal = function(root) {
  let result = [];
  let stackArr = [];
  if (!root) return result;
  while (!!root || stackArr.length > 0) {
    while (!!root) {
      stackArr.push(root);
      root = root.left;
    }
    root = stackArr.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
};
