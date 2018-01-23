const isValidBST = function(root) {
  if (root == null) return false;
  let stackArr = [];
  let pre = null;
  while (root !== null || stackArr.length > 0) {
    while (root !== null) {
      stackArr.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (pre != null && pre.val >= root.val) return false;
    pre = root;
    root = root.right;
  }
};

// while tree value is not null
// if right value > left value
// call isValid on both left and right again
