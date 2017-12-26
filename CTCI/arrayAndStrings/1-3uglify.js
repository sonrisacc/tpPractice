const urlIfy = (str, length) => {
  let startIndex = 0;
  let endIndex = 0;
  let strArr = str.split('');
  for (let i = 0; i < length; i++) {
    if (str.charAt(i) !== ' ') {
      startIndex = i;
      break;
    }
  }

  for (let i = length - 1; i > 0; i--) {
    if (str.charAt(i) !== ' ') {
      endIndex = i;
      break;
    }
  }

  for (let i = startIndex; i < endIndex; i++) {
    if (str.charAt(i) === ' ') {
      strArr[i] = '%20';
    }
  }
  return strArr.slice(startIndex, endIndex + 1).join('');
};

// O(n)
console.log(urlIfy('a b c', 5) === 'a%20b%20c');
console.log(urlIfy('a b c     ', 10) === 'a%20b%20c');
console.log(urlIfy('     a b c', 10) === 'a%20b%20c');
console.log(urlIfy('Mr John Smith    ', 13) === 'Mr%20John%20Smith');
