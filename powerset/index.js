const powerSet = function(str) {
  // drop duplicates

  let strArr = str.split('').sort();
  let strObj = {};
  strArr.reduce((acc, cur) => (strObj[cur] ? strObj : (strObj[cur] = true)), 0);
  str = Object.keys(strObj).join('');

  // find subset
  function subsetGenerator(index, curSubSet) {
    if (index >= str.length) {
      return [curSubSet];
    } else {
      let dropCurrent = subsetGenerator(index + 1, curSubSet);
      let addCurrent = subsetGenerator(index + 1, curSubSet + str[index]);
      return dropCurrent.concat(addCurrent);
    }
  }
  return subsetGenerator(0, '').sort();
};

module.exports = powerSet;
