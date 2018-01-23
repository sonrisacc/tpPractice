function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const mergeTrees = function(t1, t2) {
  if (t1 == null && t2 == null) return null;
  let a = t1 == null ? 0 : t1.val || 0;
  let b = t2 == null ? 0 : t2.val || 0;
  let root = new TreeNode(a + b);
  root.left = mergeTrees(t1 && t1.left, t2 && t2.left);
  root.right = mergeTrees(t1 && t1.right, t2 && t2.right);
  return root;
};
