function isCryptSolution(crypt, solution) {
  let obj = {};
  solution.forEach(cur => (obj[cur[0]] = cur[1]));

  let isValid = crypt.every(cur => {
    let a = cur.charAt(0);
    return obj[a] != 0;
  });
  if (!isValid && obj[crypt[2]] != 0) return isValid;
  let newArr = crypt.map(cur => {
    let result = '';
    for (let i = 0; i < cur.length; i++) {
      result += obj[cur.charAt(i)];
    }
    return (cur = result);
  });

  return Number(newArr[0]) + Number(newArr[1]) === Number(newArr[2]);
}
let output = isCryptSolution(
  ['A', 'B', 'C'],
  [['A', '5'], ['B', '6'], ['C', '1']]
);
console.log(output);
