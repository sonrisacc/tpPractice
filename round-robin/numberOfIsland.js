const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const numIslands = grid => {
  let counter = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] == '1') {
        counter++;
        dfs(grid, r, c, grid.length, grid[0].length);
      }
    }
  }
  return counter;
};

function dfs(grid, i, j, maxR, maxC) {
  grid[i][j] = 'X';
  for (let d of dir) {
    let x = i + d[0];
    let y = j + d[1];
    if (0 <= x && x < maxR && 0 <= y && y < maxC && grid[x][y] == '1') {
      dfs(grid, x, y, maxR, maxC);
    }
  }
}
