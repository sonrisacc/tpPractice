function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

const isBalanced = treeRoot => {
  const depthArr = [];
  const stack = [];
  let cur = treeRoot;
  // if no tree
  if (cur === null) return true;
  let counter = 0;
  while (!!cur || stack.length > 0) {
    if (cur === null) {
      counter--;
      cur = stack.pop();
    } else {
      stack.push(cur.right);
      if (cur.left === null) {
        if (depthArr.indexOf(counter === -1) && depthArr.length < 2) {
          depthArr.push(counter);
          if (Math.abs(depthArr[0] - depthArr[1]) > 1) {
            return false;
          }
        }
      }

      if (cur.left === null) counter++;
      cur = cur.left;
      counter++;
    }
  }
  return true;
};

let root = new BinaryTreeNode(5);
let depth1l = root.insertLeft(3);
let depth1r = root.insertRight(4);
let depth2r = depth1r.insertLeft(3);
let depth2l = depth1l.insertLeft(1);
let depth3l = depth2l.insertLeft(6);
let depth4l = depth3l.insertLeft(7);
let depth5l = depth4l.insertLeft(8);
console.log(isBalanced(root));
/*
depth > leaf nodes => no children
depth
        5
      /   \
     3      4
    / \    /
   1   2  3
  /
 6
 /
 7
 /
 8


big-o: n
big-o space: n


// BFS, find 1st leaf nodes   -> speed: n  space: constant
// check 2 level down ==> there's leaf nodes

// BFS -> find first leaf nodes and stop
// checkLeafNode(curLevel) ==> return true/false

// depth []

// stack[4, 2]
// @5
// cur.left =>3
// cur =cur.left => 1
// 6 ==> leaf node
// depth[3] // <-- depth check
// cur.left => null && stack.length <--
// cur = stack.pop()  //@ 2
// 2.left? => null
// depth[2]
// cur = stack.pop()  //@ 4
// cur= cur.left ==> 3
// depth[2]

//depth check
  //if !exist ==> add to the Array
  //if depth.length >3  return false;
  // if depth.length ==2, depth[1] -depth[0] > 1

const checkBinaryTree = (node) => {
  const depthArr = [];
  const stack = [];
  const cur = node;
  // if no tree
  if (cur === null) return true;
  let counter = 0;
  while(!!cur || stack.length>0) {
     if(cur === null){
       counter --;
       cur = stack.pop();
     }
     stack.push(cur.right);

     if(cur.left === null) {
       depthArr.push(counter);
     }

    cur = cur.left;
    counter ++;
  }


}






*/
