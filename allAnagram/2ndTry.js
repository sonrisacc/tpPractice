/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */
// input = 'a'

/*



*/

function allAnagram(input) {
  let result = [];
  function generator(remain, cur) {
    cur = cur || '';
    if (remain.length === 0) {
      result.push(cur);
    }
    for (let i = 0; i < remain.length; i++) {
      generator(
        remain.slice(0, i) + remain.slice(i + 1),
        cur.concat(remain[i])
      );
    }
  }
  generator(input, '');
  return result;
}
const input1 = 'abc';
const input2 = '';

let output1 = allAnagram(input1);
let output2 = allAnagram(input2);

console.log(output1);
console.log(output2);
