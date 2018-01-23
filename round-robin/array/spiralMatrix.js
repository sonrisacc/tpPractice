const spiralMatrix = function(arr) {
  let startCol = 0;
  let endCol = arr.length - 1;
  let startRow = 0;
  let endRow = arr.length - 1;
  let result = [];
  let total = arr.length * arr[0].length;

  while (result.length < total) {
    // going horizontal right

    for (let i = startCol; i <= endCol; i++) {
      result.push(arr[startRow][i]);
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      result.push(arr[i][endCol]);
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(arr[endRow][i]);
      }
      endRow--;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(arr[i][startCol]);
      }
      startCol++;
    }
  }
  return result;
};
const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const exoutput = [1, 2, 3, 6, 9, 8, 7, 4, 5];

const output = spiralMatrix(input);
console.log(output);
