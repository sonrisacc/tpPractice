const isUnique = str => {
  let obj = {};
  for (let letter of str) {
    if (!obj[letter]) {
      obj[letter] = true;
    } else {
      return false;
    }
  }
  return true;
};
// timeComplexity
// worst case: linear
console.log(isUnique('aab'));
console.log(isUnique('ac'));
