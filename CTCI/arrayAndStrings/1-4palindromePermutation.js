const palindromPermutation = input => {
  let palindromObj = {};
  let oddNumerCounter = 0;
  for (letter of input) {
    letter = letter.toLowerCase();
    if (palindromObj[letter]) {
      palindromObj[letter]++;
    } else {
      palindromObj[letter] = 1;
    }
  }

  for (key in palindromObj) {
    if (palindromObj[key] % 2 !== 0 && key !== ' ') {
      oddNumerCounter++;
    }
  }
  return oddNumerCounter > 1 ? false : true;
};

// palindromPermutation('Tact Coa');
// console.log(palindromPermutation('Tact Coa') === true); // tac
