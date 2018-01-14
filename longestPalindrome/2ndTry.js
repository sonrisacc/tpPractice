/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

const longestPalindrome = function(string) {
  function findPalindrome(leftIndex, rightIndex, string) {
    while (string.charAt(leftIndex) === string.charAt(rightIndex)) {
      if (leftIndex >= 0 && rightIndex < string.length) {
        leftIndex--;
        rightIndex++;
      } else {
        break;
      }
    }
    return string.slice(leftIndex + 1, rightIndex);
  }
  let result = '';
  if (string.length <= 2) return null;
  for (let i = 1; i < string.length; i++) {
    let oddPalindrome = findPalindrome(i - 1, i + 1, string);
    let evenPalindrome = findPalindrome(i - 1, i, string);
    let temp =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;
    result = temp.length > result.length ? temp : result;
  }
  return result;
};

const input = 'My dad is a racecar athlete';
let output = longestPalindrome(input);
console.log(output);

const expectedOutput = 'ddccbbaabbccdd';
const input1 = 'ddccbbaabbccdd';
const output1 = longestPalindrome(input1);
console.log(output1 === expectedOutput);

const expectedOutput2 = ' redivider ';
const input2 = 'aaaa level eye redivider hannah';
const output2 = longestPalindrome(input2);
console.log(output2 === expectedOutput2);

const expectedOutput3 = null;
const input3 = 'a';
const output3 = longestPalindrome(input3);
console.log(output3 === expectedOutput3);
