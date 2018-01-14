const isNearPalindrome = function() {
  if (input.length < 4) return true;
  if (input.length % 2 === 0) {
    // even
    // start from center -1, center
    // expand outwards,
    // can only have one difference
    // if not, check
  } else {
    // odd
  }
};

const output = nearPalindrome('BANBH') === false;
const output1 = nearPalindrome('BANBAH') === false;
const output2 = nearPalindrome('BANAH') === true;
const output3 = nearPalindrome('HAKNNAH') === true;
const output4 = nearPalindrome('') === true;

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);
console.log(output4);

// one letter away from being a palindrome, be it by replacement, addition or removal.
