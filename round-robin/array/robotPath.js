const makeBoard = function(n) {
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const robotPaths = function(n, board, i, j, result) {
  if (!board) {
    board = makeBoard(n);
    i = 0;
    j = 0;
  }
  result = result || 0;
  if (!(i >= 0 && i < n && j >= 0 && j < n)) return 0;
  if (board.hasBeenVisited(i, j)) return 0;
  if (i === n - 1 && j === n - 1) return 1;
  board.togglePiece(i, j);

  for (let d of direction) {
    let x = i + d[0];
    let y = j + d[1];
    result += robotPaths(n, board, x, y);
  }
  board.togglePiece(i, j);
  return result;
};

console.log(robotPaths(5));

/*

[
 [false, false, false, false],
 [false, false, false, false],
 [false, false, false, false]
];

starting from top left, at each square, robot can choose four direction
it will keep duplicate itself, until there's no more move


*/
