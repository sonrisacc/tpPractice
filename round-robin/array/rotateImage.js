function rotateImage(a) {
  let n = a.length;
  let result = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      console.log(n - j);
      row.push(a[n - j][i]);
    }
    result.push(row);
  }
  return result;
}

let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let output = rotateImage(a);
console.log(output);
