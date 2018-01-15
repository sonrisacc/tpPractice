function removeLetter(str, targetIndex) {
  let center = Math.floor((str.length - 1) / 2);
  targetIndex = targetIndex || center;
  return str.slice(0, targetIndex) + str.slice(targetIndex + 1);
}
function isPalindrome(str) {
  let newStr = str;
  let center = Math.floor((newStr.length - 1) / 2);
  let end = newStr.length - 1;

  if (newStr.length % 2 !== 0) newStr = removeLetter(str);
  for (let i = 0; i <= center; i++) {
    if (newStr[i] !== newStr[end - i]) return false;
  }
  return true;
}

function checkBasic(str) {
  // ABCB ==> A BCB A
  for (let i = 0; i < str.length; i++) {
    let remained = removeLetter(str, i);
    if (isPalindrome(remained)) return true;
  }
  return false;
}

function checkEdits(str) {
  // ABBD ==> DBBD
  for (let i = 0; i < str.length / 2; i++) {
    let newStr =
      str.slice(0, i) + str.charAt(str.length - 1 - i) + str.slice(i + 1);

    if (isPalindrome(newStr)) return true;
  }

  return false;
}

const isNearPalindrome = function(input) {
  if (input.length < 4) return true;
  if (isPalindrome(input)) return false;
  let newStr = input;
  if (input.length % 2 !== 0) newStr = removeLetter(input);
  return checkBasic(newStr) ? true : checkEdits(newStr);
};

const outputa = isNearPalindrome('BAAH') === true;
const output = isNearPalindrome('BANBH') === false;
const output1 = isNearPalindrome('BANBAH') === false;
const output2 = isNearPalindrome('BANAH') === true;
const output3 = isNearPalindrome('HAKNNAH') === true;
const output4 = isNearPalindrome('') === true;
console.log(outputa);
console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);

// one letter away from being a palindrome, be it by replacement, addition or removal.
