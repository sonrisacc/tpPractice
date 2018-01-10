const longestPalindrome = function(string) {
  // find palindrome with given index [start,end]
  // itertate the string, for each cur letter pair,
  // find palindrome for odd
  // find for even
  // compare the two
  // find max, compare to resultMax
  // update resultMax
  let result = '';
  let temp = '';
  function findPalindrome(start, end) {
    while (start >= 0 && end < string.length && string[start] === string[end]) {
      start--;
      end++;
    }
    return string.slice(start + 1, end);
  }

  for (let i = 0; i < string.length; i++) {
    let oddPal = findPalindrome(i - 1, i + 1);
    let evenPal = findPalindrome(i, i + 1);
    oddPal.length > evenPal.length ? (temp = oddPal) : (temp = evenPal);
    result.length > temp.length ? result : (result = temp);
  }
  return result;
};

// function isPalidrome(str) {
//   // ab bba
//   if (str.length < 2) return false;
//   for (let i = 0; i < str.length / 2; i++) {
//     let end = str.length - 1 - i;
//     if (str.charAt(i) !== str.charAt(end)) {
//       return false;
//     }
//   }
//   return true;
// }
// c: best i can do ?
// edge: Count whitespaces
//   if input is empty/none palindrome return null
//   if two same length, out put the first one

const expectedOutput = 'ddccbbaabbccdd';
const input = 'ddccbbaabbccdd';
const output = longestPalindrome(input);
console.log(output === expectedOutput);

const expectedOutput2 = ' redivider ';
const input2 = 'aaaa level eye redivider hannah';
const output2 = longestPalindrome(input2);
console.log(output2 === expectedOutput2);
