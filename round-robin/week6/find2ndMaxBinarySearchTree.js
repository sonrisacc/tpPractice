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

const find2ndLargest = root => {
  let cur = root;
  let result;
  if (root === null) return null;
  while (!!cur) {
    if (cur.right === null && cur.left === null) {
      result = cur;
    }
    if (cur.right === null && cur.left !== null) {
      cur = cur.left;
      while (!!cur) {
        if (cur.right === null) break;
        cur = cur.right;
      }
      result = cur;
    }
    cur = cur.right;
  }
  return result.value;
};

/*
 
 is larger than the keys in all nodes in that node's left 
 subtree and smaller than the keys in all nodes in that node's right subtree. 
      8 
    /    \
   5       12
  / \    /    \
 1   6  10    
                 17
                / 
               15
                / \
                  16
 let max = the largest will be at the most ? right node
 let secondMax = max.parent 
 
 
 iterate through the tree (on each node's right hand node)
   // when cur.right === null && cur.left === null <== max 
      // second largest   cur.parent <== 
   // when cur.right === null, cur.left !== null
      // re-evoke  findLargest(cur) <== second largest  
      
    big-O: n (n === the depth of the tree) speed 
           const space ** 
           
    // trying to find the max value of the tree 
      // if no left child, cur.parent --> result
      // if with left child, findMax(cur) --> result
  
 
   
*/
