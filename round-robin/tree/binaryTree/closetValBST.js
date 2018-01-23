const closestValue = function(root, target, temp) {
  temp = root.val;
  while (root != null) {
    temp =
      Math.abs(target - root.val) < Math.abs(target - temp) ? root.val : temp;
    if (temp == target) return temp;
    root = root.val > target ? root.left : root.right;
  }
  return temp;
};

// traversal through the tree
// calculate targe - curVal
// vs tempMax difference
// update if temp is larger {diff: value}

// if (!root.val) return temp;
// if (Math.abs(root.val - target) < Math.abs(temp - target)) {
//   temp = root.val;
// } else if (Math.abs(root.val - target) > Math.abs(temp - target)) {
//   return temp;
// }
// if (target < root.val) closestValue(this.left, target, temp);
// if (target > root.val) closestValue(this.right, target, temp);
