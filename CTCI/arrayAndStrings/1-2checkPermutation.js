const checkPermutaion = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let a = str1
    .split('')
    .sort()
    .join('');
  let b = str2
    .split('')
    .sort()
    .join('');
  if (a !== b) return false;
  return true;
};

// big-O:
console.log('should be true', checkPermutaion('abc', 'cba'));
console.log('should be false', checkPermutaion('ab', 'cba'));
console.log('should be false', checkPermutaion('aabc', 'abc'));
