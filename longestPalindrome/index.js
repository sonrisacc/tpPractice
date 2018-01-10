/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

const longestPalindrome = function(string) {
  // iterate through string
  let result = '';
  function findPalindrome(left, right) {
    while (left > 0 && right < string.length && left === right) {
      left--;
      right++;
    }
    return string.slice(left + 1, right);
  }
  for (let i = 0; i < string.length; i++) {
    let oddPal = findPalindrome(i - 1, i + 1);
    let evenPal = findPalindrome(i, i + 1);
    if (oddPal.length > result.length) result = oddPal;
    if (evenPal.length > result.length) result = evenPal;
    // even : deed
    // check if pre = cur/ cur = after
    // odd : dad
    // check if pre,  after are the same
    // check pre -1, after +1 are the same
    // save ^ in to a var : tempMax
    // until its not
    // compare if tempMax > resultMAX
    // yes: update result
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

const expectedOutput = 'a racecar a';
const input = 'My dad is a racecar athlete';
const output = longestPalindrome(input);
console.log(output);
