const Tree = function(input) {
  this.value = input;
  this.children = [];
};

const Queue = function() {
  this.storage = [];
};

Queue.prototype.enqueue = function(value) {
  this.storage.push(value);
  return this.storage;
};

Queue.prototype.dequeue = function(value) {
  return this.storage.shift();
};

Tree.prototype.addChild = function(input) {
  let newLeaf = new Tree(input);
  this.children.push(newLeaf);
  return newLeaf;
};

Tree.prototype.mapInPlace = function(callback) {
  this.value = callback(this.value);
  for (let cur of this.children) {
    cur.mapInPlace(callback);
  }
  return this;
};

Tree.prototype.map = function(callback) {
  let cloneLeaf = new Tree(callback(this.value));
  for (let cur of this.children) {
    cloneLeaf.addChild(cur.map(callback));
  }
  return cloneLeaf;
};

Tree.prototype.countLeaves = function() {
  let leaves;
  if (this.children.length === 0) {
    leaves = 1;
  } else {
    leaves = 0;
    for (let cur of this.children) {
      leaves += cur.countLeaves();
    }
  }
  return leaves;
};

Tree.prototype.bFselect = function(filter) {
  // o(n)
  let helperQueue = new Queue();
  let result = [];

  helperQueue.enqueue({ tree: this, depth: 0 });

  while ((cur = helperQueue.dequeue())) {
    if (filter(cur.tree.value, cur.depth)) {
      result.push(cur.tree.value);
    }
    for (let child of cur.tree.children) {
      helperQueue.enqueue({ tree: child, depth: cur.depth + 1 });
    }
  }
  return result;
};

Tree.prototype.dFselect = function(filter, depth) {
  let result = [];
  depth = depth || 0;

  if (filter(this.value, depth)) result.push(this.value);
  this.children.map(
    cur => (result = [...result, ...cur.dFselect(filter, depth + 1)])
  );
  return result;

  // method 2
  // depth = depth || 0;
  // let rootSelection = filter(this.value, depth) ? [this.value] : [];
  // let childSelections = this.children.map(function(child) {
  //   return child.dFselect(filter, depth + 1);
  // });
  // return rootSelection.concat(...childSelections);
};
