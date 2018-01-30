let direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];

const dfs = function(board, visited, target, pos, i, j) {
  let n = board.length;
  let m = board[0].length;
  // finished scan target
  if (pos == target.length) return true;
  // if off board
  if (!(i >= 0 && i < n && j >= 0 && j < m)) return false;
  // if cur number !== coresponding element in the input str
  if (visited[i][j] || board[i][j] != target.charAt(pos)) return false;
  // togglePiece
  visited[i][j] = true;

  // for each direction, search
  for (let d of direction) {
    let x = i + d[0];
    let y = j + d[1];
    if (dfs(board, visited, target, pos + 1, x, y)) return true;
  }
  visited[i][j] = false;
  return false;
};

const findString = function(target, board) {
  if (!board) {
    board = [['A', 'D', 'A', 'A'], ['E', 'G', 'M', 'V'], ['A', 'C', 'T', 'A']];
  }

  let visited = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ];
  return dfs(board, visited, target, 0, 0, 0);
};

console.log(findString('ADGC'));
