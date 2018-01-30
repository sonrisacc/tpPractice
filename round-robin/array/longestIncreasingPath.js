const isVisited = function(m, n) {
  let result = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(false);
    }
    result.push(row);
  }
  return result;
};

const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const longestIncreasingPath = function(matrix, visited, i, j, result) {
  let m = matrix.length;
  let n = matrix[0].length;
  i = i || 0;
  j = j || 0;
  visited = visited || isVisited(m, n);
  result = result || [];
  let pre = result[result.length - 1];
  // if off the board
  if (!(0 <= i && i < m && 0 <= j && j < n)) return;
  // if already being visited
  if (visited[i][j]) return;
  // if is greater then cur val
  if (pre <= matrix[i][j]) {
    result.push(matrix[i][j]);
  }
  visited[i][j] = true;
  for (let d of direction) {
    let x = i + d[0];
    let y = j + d[1];
    longestIncreasingPath(matrix, visited, x, y);
  }
  visited[i][j] = false;
  return result;
};

let output = longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]);
console.log(output);
