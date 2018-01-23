// in-order traversal  (visit left branch -> cur node -> right)

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

BinaryTree.prototype.contains = function(target) {
  if (target === this.value) return true;
  if (target < this.value && !!this.left) {
    return this.left.contains(target);
  } else if (target > this.value && !!this.right) {
    return this.right.contains(target);
  }
  return false;
};

BinaryTree.prototype.inOrderTrav = function(callback) {
  // print value from the smallest to the greates
  // 3,5,7,10,15,20
  if (!!this.left) this.left.inOrderTrav(callback);
  callback(this.value);
  if (!!this.right) this.right.inOrderTrav(callback);
  return false;
};

BinaryTree.prototype.preOrderTrav = function(callback) {
  // print root value first, then from the smallest to the greates
  // 10,3,5,7,15,20
  callback(this.value);
  if (!!this.left) this.left.inOrderTrav(callback);
  if (!!this.right) this.right.inOrderTrav(callback);
  return false;
};

BinaryTree.prototype.postOrderTrav = function(callback) {
  // print root value first, then from the smallest to the greates
  // 3,5,7,15,20, 10

  if (!!this.left) this.left.inOrderTrav(callback);
  if (!!this.right) this.right.inOrderTrav(callback);
  callback(this.value);
  return false;
};

let root = new BinaryTree(10);
root.insert(5);
root.insert(20);
root.insert(3);
root.insert(7);
root.insert(15);
// console.log(root.contains(3));
root.postOrderTrav(val => console.log(val));
