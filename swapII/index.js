/*

Using the JavaScript language, have the function SwapII(str) take the str parameter and swap the case of each character. Then, if a letter is between two numbers (without separation), switch the places of the two numbers. For example: if str is “6Hello4 -8World, 7 yes3” the output should be 4hELLO6 -8wORLD, 7 YES3.

*/
// [‘4hELLO6’, ‘-8wORLD,’, ‘7’, ‘YES3’];

// O: where the character’s case will be swapped and for strings that has two numbers without separation, they will get swapped.
// I: a string
// C: O(n) || O(n ^ 2)
// E: if ‘’ === return ‘’
// what if input is 6Hello45 === 45hELLO6 || 4hELLO56
// they’ll never be two numbers next to each other. it would always have either a character or space between.

// could this be solved using RegEx? Maybe.

// if char.toLowerCase() => char.toUpperCase()
// if char.toUpperCase() => char.toLowerCase()

// iterate through the array
// check if char is lowerCase
// swap char’s case
// check if char is upperCase
// swap char’s case
// check if char is a n
// create a storage for chars that are numbers
// split the string and assign to a variable
// iterate through the split string : [‘6He4llo5’, ‘-8World,’, ‘7’, ‘yes3’]
// within the array, iterate through each element and check its char
// check if char is a number

// char === 6
// char = { ‘first pair’: { 6: array[0] }, ‘second pair’: 5: array[i] }
// if first pair exist, update the second pair

// push number into an object (number will be key and index will be value)
// check if char is lowerCase
// swap char’s case to upperCase
// check if char is upperCase
// swap char’s case to lowerCase
// swap the number’s position
// return the split array and join them

const swapII = function(str) {
  let numbers = {
    first: [],
    second: []
  };

  const lowCase = /[a-z]/;
  const upCase = /[A-Z]/;
  const numbs = /[0-9]/;

  let result = [];
  for (let i = 0; i < str.length; i++) {
    let curLetter = str.charAt(i);
    if (curLetter.match(lowCase)) {
      result.push(curLetter.toUpperCase());
    } else if (curLetter.match(upCase)) {
      result.push(curLetter.toLowerCase());
    } else {
      result.push(curLetter);
    }
  }

  result.forEach((cur, index) => {
    if (cur === ' ') {
      let startIndex = numbers.first[1];
      let endIndex = numbers.second[1];

      if (numbers.first.length !== 0 && numbers.second.length !== 0) {
        result[startIndex] = numbers.second[0];
        result[endIndex] = numbers.first[0];
      }
      numbers.first = [];
      numbers.second = [];
    }
    if (cur.match(numbs) && numbers.first.length === 0) {
      numbers.first = [cur, index];
    } else if (cur.match(numbs) && numbers.first.length > 0) {
      numbers.second = [cur, index];
    }
  });

  return result.join(' ');
};

const input = '6Hello4 -8World, 7 yes3';
swapII(input);
// if (char ==== char.toLowerCase()) {
//   char.toUpperCase();
// }
//
// if (char ==== char.toUpperCase()) {
//   char.toLowerCase();
// }
