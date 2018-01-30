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
  let result;
  let visited = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      result = dfs(board, visited, target, 0, i, j);
    }
  }
  return result;
};

console.log(findString('AVAAMT')); // not passing yet
console.log(findString('TMAAVA'));
console.log(findString('CGMT')); // not passing yet

/*
make another board that save the isVisited info for the words board,
// iterate through every cell in the board as starting point,
  // move to four direction at a time,
  // at each step, check if off board, if charaters is not correct, and if here has been visited

//input : [a,b,c]
@ 0,0
[ a b ]
[ c d ]

 a  -> c          c !== b return false
 a  -> b  -> d    d !== c, return false

 b,c,d   return false


 [ a b c]
 [ d e f]
 [ a b c]


@ 0, 0
  a  -> d
  a  -> b  -> e
  a  -> b  -> c  found

*/
