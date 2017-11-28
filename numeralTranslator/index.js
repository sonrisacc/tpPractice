const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
// MCMLIV  1000  100  1000 50 1 5
// MMVIII  1000 1000 5 1 1 1
// MCM  1000 100 1000
// MDCCCCX  1000 500 100 100 100 100 10  1910

const translateRomanNumeral = function(romanNumeral) {
  // rule out invalid input
  if (typeof romanNumeral !== 'string' || romanNumeral.length === 0) {
    return null;
  }
  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    // rule out invalid letters
    if (!DIGIT_VALUES[romanNumeral.toUpperCase()[i]]) return null;

    let cur = DIGIT_VALUES[romanNumeral.toUpperCase()[i]];
    let next = DIGIT_VALUES[romanNumeral.toUpperCase()[i + 1]];

    if (cur >= next || i === romanNumeral.length - 1) {
      result += cur;
    } else {
      result -= cur;
    }
  }
  return result;
};

// console.log(translateRomanNumeral('MCMLIV'));
module.exports = translateRomanNumeral;
