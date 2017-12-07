/*  eslint-disable */
Array.prototype.isSubsetOf = function(arr) {
  // your code here
  const obj = {};
  arr.forEach(cur => {
    if (typeof cur !== 'object') {
      obj[cur] = 1;
    } else if (Array.isArray(cur)) {
      obj[JSON.stringify(cur)] = 1;
    }
  });
  for (let ele of this) {
    console.log(ele);
    if (obj[ele] !== 1) return false;
  }
  return true;
};

module.exports = Array.prototype.isSubsetOf;
