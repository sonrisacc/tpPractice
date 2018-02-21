function nQueens(n) {
  let res = [];
  findCurRowSolution(n, 0, [], res);
  return res;
}

function findCurRowSolution(n, row, columnArr, res) {
  if (row === n) {
    let strRow = [];

    for (let i = 0; i < n; i++) {
      strRow.push(columnArr[i] + 1);
    }

    res.push(strRow);
    return;
  }

  for (let i = 0; i < n; i++) {
    columnArr[row] = i;

    if (checker(row, columnArr)) {
      findCurRowSolution(n, row + 1, columnArr, res);
    }
  }
}

function checker(row, columnArr) {
  for (let i = 0; i < row; i++) {
    if (
      columnArr[row] === columnArr[i] ||
      Math.abs(columnArr[row] - columnArr[i]) === row - i
    ) {
      return false;
    }
  }
  return true;
}
