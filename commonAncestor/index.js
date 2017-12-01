const Tree = function() {
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(child1, child2) {
  let path1 = this.getAncestorPath(child1);
  let path2 = this.getAncestorPath(child2);

  if (path1 === null || path2 === null) return null;

  let len = Math.min(path1.length, path2.length);
  let closestAncestor;
  for (let i = 0; i < len; i++) {
    if (path1[i] === path2[i]) {
      closestAncestor = path1[i];
    }
  }
  return closestAncestor;
};

Tree.prototype.getAncestorPath = function(target) {
  if (this === target) {
    return [this];
  }

  if (this.children.indexOf(target) >= 0) {
    return [this, target];
  }

  for (let i = 0; i < this.children.length; i++) {
    if (this.children[i].isDescendant(target)) {
      return [this].concat(this.children[i].getAncestorPath(target));
    }
  }

  return null;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  let index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};

/*
const grandma = new Tree();
const mom = new Tree();
const auntElaine = new Tree();
const me = new Tree();
grandma.addChild(mom);
grandma.addChild(auntElaine);
mom.addChild(me);
console.log('99', JSON.stringify(grandma, null, 2));
console.log('100', grandma.isDescendant(me));
console.log(grandma.getAncestorPath(me)); // => [grandma, mom, me]
*/

/*
const a = { a: 1 };
const b = { b: 1 };
const c = { c: 1 };
const arr = [a, b, c];
const arr2 = [{ a: 1 }, { b: 1 }, { c: 1 }];
console.log('test', arr.indexOf(a)); // 0
console.log('test2', arr2.indexOf({ a: 1 })); // -1
console.log('test3', arr.indexOf({ a: 1 })); // -1
console.log('test4', arr2.indexOf(a)); // -1
*/

/*
const root = new Tree();
const left = new Tree();
root.addChild(left);
const right1 = new Tree();
root.addChild(right1);
const right2 = new Tree();
right1.addChild(right2);
const right3 = new Tree();
right1.addChild(right3);
const closestAncestor = root.getClosestCommonAncestor(right2, right3);
console.log(closestAncestor === right1);
*/
