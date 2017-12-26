const allAnagrams = function(string) {
  // Your code here.
  let anagrams = {};

  function subRoutine(hadSoFar, stringLeft) {
    hadSoFar = hadSoFar || '';
    if (stringLeft.length === 0) {
      anagrams[hadSoFar] = true;
    }

    for (let i = 0; i < stringLeft.length; i++) {
      subRoutine(
        hadSoFar.concat(stringLeft[i]),
        stringLeft.slice(0, i) + stringLeft.slice(i + 1)
      );
    }
  }
  subRoutine('', string);
  return Object.keys(anagrams);
};

module.exports = allAnagrams;
// const anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
