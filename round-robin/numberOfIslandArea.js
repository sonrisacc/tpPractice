const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const maxAreaOfIsland = grid => {
  let max = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == '1') {
        let temp = explore(grid, r, c, grid.length, grid[0].length);
        max = Math.max(max, temp);
      }
    }
  }
  return max;
};

function explore(grid, i, j, maxR, maxC) {
  grid[i][j] = 'X';
  let area = 1;
  for (let d of dir) {
    let x = i + d[0];
    let y = j + d[1];
    if (0 <= x && x < maxR && 0 <= y && y < maxC && grid[x][y] == '1') {
      area += explore(grid, x, y, maxR, maxC);
    }
  }

  return area;
}

maxAreaOfIsland([
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
]);
