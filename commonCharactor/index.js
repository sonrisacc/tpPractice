/*
const commonCharacters = function(str1, str2) {
  let obj = {};
  let obj2 = {};
  let result = [];
  Array.from(str1).forEach(cur => {
    if (!obj[cur]) {
      obj[cur] = 1;
    } else {
      obj[cur]++;
    }
  });

  Array.from(str2).forEach(cur => {
    if (!obj2[cur]) {
      obj2[cur] = 1;
    } else {
      obj2[cur]++;
    }
    if (obj[cur] && obj2[cur] === 1) {
      result.push(cur);
    }
  });

  return result.join('');
};
// console.log(commonCharacters('acexivou', 'aegihobu') === 'aeiou');
*/

const preOp = function(input) {
  let obj = {};
  Array.from(input).forEach(cur => {
    if (cur.match(/[a-z]/i)) {
      obj[cur] = 1;
    }
  });
  return obj;
};

const commonCharacters = function(...args) {
  let arr = Array.from(args);
  arr.map(cur => preOp(cur));
  let out = arr[0];
};

console.log(commonCharacters('acexivou', 'aegihobu', 'arious') === 'aeiou');
