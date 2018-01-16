/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

const convert1 = function(s, numRows) {
  s = s.toUpperCase();

  const center = Math.floor((numRows - 1) / 2);
  let start = 0;
  let end = numRows === 2 ? start + 2 : start + numRows + 1;

  let resultArr = [];
  let result = '';

  if (s.length === 0) return result;
  if (numRows === 1 || s.length <= 2 || numRows + 1 >= s.length) return s;

  for (let i = 0; i < numRows; i++) resultArr.push([]);

  while (start < s.length) {
    let string = end > s.length - 1 ? s.slice(start) : s.slice(start, end);
    let n = numRows !== 2 ? string.length - 1 : string.length;

    for (let i = 0; i < numRows; i++) {
      if (string.charAt(i)) resultArr[i].push(string.charAt(i));
    }

    if (string.charAt(numRows) && numRows !== 2) {
      resultArr[center].push(string.charAt(string.length - 1));
    }

    start = end;
    end = numRows !== 2 ? start + numRows + 1 : start + 2;
  }
  result = resultArr
    .join('')
    .split(',')
    .join('');
  console.log(result);
  return result;
};

//
const convert2 = function(s, numRows) {
  let index = 0;
  let step = 1;
  let result = [];
  if (s.length <= 1 || numRows >= s.length) {
    return result;
  }

  for (let i = 0; i < s.length; i++) {
    if (result[index] === undefined) {
      result[index] = '';
    }
    result[index] += s[i];
    if (index === 0) {
      step = 1;
    } else if (index === numRows - 1) {
      step = -1;
    }
    index += step;
  }
  return result.join('');
};

let input = 'AB';
let input1 = 'abc';
convert1('ABCDEF', 2);
convert1('ABCDEF', 3);
convert1('ABCDEF', 4);
