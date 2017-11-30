// tree:
// {value:xx, children: [ {value:xx, children: []}, {value:xx, children: []}, {value:xx, children: []}]}

const Tree = function(input) {
  this.value = input;
  this.children = [];
};

Tree.prototype.addChild = function(input) {
  let newTree = new Tree(input);
  this.children.push(newTree);
  return newTree;
};

Tree.prototype.map = function(callback) {
  let output = new Tree(callback(this.value));
  output.children = this.children.map(cur => {
    return cur.map(callback);
  });
  return output;
};

Tree.prototype.mapInPlace = function(callback) {
  this.value = callback(this.value);
  this.children = this.children.map(cur => {
    return cur.map(callback);
  });
  return this;
};

Tree.prototype.countLeaves = function() {
  let counter = 0;
  if (this.children.length === 0) {
    return ++counter;
  }
  this.children.forEach(cur => {
    counter += cur.countLeaves();
  });
  return counter;
};

module.exports = Tree;
/*
const root1 = new Tree(1);
const branch2 = root1.addChild(2);
const branch3 = root1.addChild(3);
branch2.addChild(4);
branch2.addChild(5);
branch3.addChild(6);
branch3.addChild(7);
const newTree = root1.map(value => {
  return value * 2;
});

console.log(newTree.children[0].value); // 4
console.log(newTree.children[1].value); // 6
console.log(newTree.children[0].children[1].value); // 10
console.log(newTree.children[1].children[1].value); // 14
console.log(root1.value); // still 1
*/

/*
const root = new Tree();

console.log(root.countLeaves()); // 1
root.addChild(new Tree());
console.log(root.countLeaves()); // still 1
root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
console.log(JSON.stringify(root));
console.log(root.countLeaves()); // 3
*/
