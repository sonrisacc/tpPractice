const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const isVisited = function(m, n) {
  let result = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    result.push(row);
  }
  return result;
};
const longestIncreasingPath = function(matrix) {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return 0;
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let dis = isVisited(rowLen, colLen); // to store the longest increasing length from current point
  let res = 0;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      res = Math.max(res, dfs(dis, rowLen, colLen, i, j, matrix));
    }
  }

  return res;
};

const dfs = function(dis, rowLen, colLen, x, y, matrix) {
  // if already be visited, return
  if (dis[x][y] != 0) return dis[x][y];

  for (let d of direction) {
    let newX = x + d[0];
    let newY = y + d[1];

    if (
      newX >= 0 &&
      newY >= 0 &&
      newX < rowLen &&
      newY < colLen &&
      matrix[x][y] < matrix[newX][newY]
    ) {
      dis[x][y] = Math.max(
        dis[x][y],
        dfs(dis, rowLen, colLen, newX, newY, matrix)
      );
    }
  }

  dis[x][y]++;
  return dis[x][y];
};

let output = longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]);
console.log(output);
