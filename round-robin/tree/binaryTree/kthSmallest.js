const BinaryTree = function(input) {
  this.value = input;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.insert = function(val) {
  if (val < this.value) {
    if (this.left === null) {
      this.left = new BinaryTree(val);
    } else {
      this.left.insert(val);
    }
  } else {
    if (this.right === null) {
      this.right = new BinaryTree(val);
    } else {
      this.right.insert(val);
    }
  }
};

const root = new BinaryTree(5);
root.insert(4);
root.insert(11);
root.insert(7);
root.insert(2);
root.insert(8);
root.insert(13);
root.insert(4);
root.insert(5);
root.insert(1);

console.log(JSON.stringify(root, null, 2));
