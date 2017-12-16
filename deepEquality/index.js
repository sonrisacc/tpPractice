const deepEquals = function(apple, orange) {
  // checking if one of them is not obj
  if (!(apple instanceof Object) || !(orange instanceof Object)) {
    return apple === orange;
  }
  // checking if one of them is not array
  if (apple instanceof Array !== orange instanceof Array) {
    return false;
  }
  // even if its array, it will have keys
  let appleKeys = Object.keys(apple);
  let orangeKeys = Object.keys(orange);
  // compare length
  if (appleKeys.length !== orangeKeys.length) {
    return false;
  }

  for (let key of appleKeys) {
    if (!deepEquals(apple[key], orange[key])) {
      return false;
    }
  }
  return true;
};

// const obj1 = { a: 1, b: { c: 3 } };
// const obj2 = { a: 1, b: { c: 3 } };
const obj1 = ['a', 'b', 'd', 'c', ['e']];
const obj2 = [1, 2, 3, 4, [4]];
console.log(deepEquals(obj1, obj2));
