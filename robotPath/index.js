/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

const MakeBoard = function(input) {
  this.board = [];
  for (let i = 0; i < input; i++) {
    this.board.push([]);
    for (let j = 0; j < input; j++) {
      this.board[i].push(0);
    }
  }
};
// let newBoard = new MakeBoard(5);
// console.log(newBoard.board[0]);
MakeBoard.prototype.togglePiece = (i, j) => {
  this[i][j] = !this[i][j];
};

MakeBoard.prototype.hasBeenVisited = (i, j) => {
  return !!this[i][j];
};

const robotPaths = n => {
  let newBoard = new MakeBoard(n);
  newBoard.board[0][0] = 1;
  for (let i = 1; i < n; i++) {
    // filling the top rows
    newBoard.board[0][i] = 9;
    // filling the left column
    newBoard.board[i][0] = 9;
  }

  // fill the reset of the newBoard.board
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      newBoard.board[i][j] =
        newBoard.board[i - 1][j] + newBoard.board[i][j - 1];
      console.log(n);
      console.log(i);
      console.log(JSON.stringify(newBoard.board));
      // console.log(JSON.stringify(newBoard.board[i - 1][i]));
      // console.log(JSON.stringify(newBoard.board[i][i - 1]));
    }
  }
  return newBoard.board[n - 1][n - 1];
};

// console.log(robotPaths(1) === 1);
// console.log(robotPaths(2) === 2);
// console.log(robotPaths(3) === 12);
console.log(robotPaths(4) === 184);
// console.log(robotPaths(5) === 8512);
