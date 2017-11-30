/*
Input:
	Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
	     3
	    / \
	   4   5
	  / \   \
	 5   4   7
*/
const BinaryTree = function(input) {
  this.value = input;
  this.left = null;
  this.right = null;
};

BinaryTree.prototype.addChild = function(input) {
  let newTree = new BinaryTree(input);
  if (this.left === null) {
    this.left = newTree;
  } else if (this.left !== null && this.right === null) {
    this.right = newTree;
  } else {
    return 'can not be added ';
  }
  return newTree;
};

const mergeTrees = function(t1, t2) {
  if (t1 === null) return t2;
  if (t2 === null) return t1;

  let thisLeft = t1.value || 0;
  let thisRight = t2.value || 0;

  let input = thisLeft + thisRight;
  let newTree = new BinaryTree(input);

  newTree.left = mergeTrees(t1.left, t2.left);
  newTree.right = mergeTrees(t1.right, t2.right);

  return newTree;
};

const root1 = new BinaryTree(1);
const branch3 = root1.addChild(3);
const branch2 = root1.addChild(2);
branch3.addChild(5);
console.log(JSON.stringify(root1, null, 2));

const root2 = new BinaryTree(2);
const bbranch1 = root2.addChild(1);
const bbranch3 = root2.addChild(3);
bbranch1.addChild();
bbranch1.addChild(4);
bbranch3.addChild();
bbranch3.addChild(7);
// console.log(JSON.stringify(root2));

const root3 = new BinaryTree(3);
const cranch4 = root3.addChild(4);
const cranch5 = root3.addChild(5);
cranch4.addChild(5);
cranch4.addChild(4);
cranch5.addChild();
cranch5.addChild(7);
console.log('root3', JSON.stringify(root3, null, 2));

const output = mergeTrees(root1, root2);
console.log('output', JSON.stringify(output, null, 2));
console.log('test', JSON.stringify(root3) === JSON.stringify(output));
