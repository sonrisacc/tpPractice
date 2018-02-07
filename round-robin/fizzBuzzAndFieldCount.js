// function fizzBuzz(n) {
//   let arr = [];
//   let a = 1;
//   while (a <= Number(n)) {
//     if (a % 15 === 0) {
//       arr.push('FizzBuzz');
//     } else if (a % 3 === 0) {
//       arr.push('Fizz');
//     } else if (a % 5 === 0) {
//       arr.push('Buzz');
//     } else {
//       arr.push(a.toString());
//     }
//     a++;
//   }
//   return arr.join('\n');
// }
// let output = fizzBuzz(0);
// console.log(output);

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
function group(grid) {
  let row = grid.length;
  let col = grid[0].length;
  let counter = 0;
  let matrix = transFormInput(grid);
  console.log(matrix);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 'N') {
        continue;
      } else if (matrix[i][j] === 'Y') {
        console.log('hello', matrix[i][j]);
        counter += 1;
        matrix[i][j] = 'N';
        mergeField(matrix, i, j, col, row);
        console.log(matrix);
      }
    }
  }
  console.log('counter', counter);
  let result = counter * (counter - 1) / 2 + 1;
  console.log(result);
  return result;
}

function transFormInput(input) {
  return input.map(cur => {
    return cur.split('');
  });
}

function mergeField(arr, a, b, totalCol, totalRow) {
  arr[a][b] = 'N';
  for (let d of dir) {
    let x = a + d[0];
    let y = b + d[1];
    if (!(0 <= x && x < totalRow && 0 <= y && y < totalCol)) continue;
    if (arr[x][y] === 'N') continue;
    if (arr[x][y] === 'Y') mergeField(arr, x, y, totalCol, totalRow);
  }
  return arr;
}
let input = ['YNNY', 'NYNY', 'NYNN'];
let input2 = ['NNYY'];
let output = group(input2);
console.log(output);
