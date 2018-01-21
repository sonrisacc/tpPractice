// if result arr index is (i ,j)
// i as row, j as column

// original arr index is (m, n)
// m as row, n as column

// the relationship between them is if rotate clockwise
// if known i, j
// original (m-1-j, i)

// if counter clockwise
// if known i, j
// original (j, n-1-i)

// create a new empty matrix as the result of rotation
// iterate through it and fill each spot according to the realtionship we found

// big 0 will be i*j, have to visit every singel spot in the matrix

const rotateMatrix = function(matrix, direction) {
  // Your code here.

  const col = matrix.length;
  if (col === 0) return [];
  const row = matrix[0].length;

  let rotatedMatrix = [];

  for (let i = 0; i < row; i++) {
    rotatedMatrix[i] = [];
    for (let j = 0; j < col; j++) {
      if (direction == 1) {
        rotatedMatrix[i][j] = matrix[col - 1 - j][i];
      }
      if (direction == -1) rotatedMatrix[i][j] = matrix[j][row - 1 - i];
    }
  }

  return rotatedMatrix;
};

const matrix = [[1, 2, 3]];
console.log(rotateMatrix(matrix, -1));
// matrix[0][0]; // 1
// matrix[3][2]; // 'F'
