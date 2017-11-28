const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const translateRomanNumeral = function(romanNumeral) {
  // TODO: Implement me!
  // rule out invalid input
  if (typeof romanNumeral !== 'string' || romanNumeral.length === 0) {
    return null;
  }
  // rule out invalid letters
  let result;
  for (let i = 1; i < romanNumeral.length; i++) {
    if (!DIGIT_VALUES[romanNumeral.toUpperCase()[i]]) return null;
    let cur = DIGIT_VALUES[romanNumeral.toUpperCase()[i]];
    let pre = DIGIT_VALUES[romanNumeral.toUpperCase()[i - 1]];
    result = result || DIGIT_VALUES[romanNumeral.toUpperCase()[0]];

    if (cur >= pre) {
      result -= cur;
    } else {
      result += cur;
    }
    return Math.abs(result);
  }
};

module.exports = translateRomanNumeral;
