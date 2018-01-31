function hasNoDuplicates(arr) {
  let numbs = /[0-9]/;
  let obj = {};
  for (let cur of arr) {
    if (numbs.test(cur)) {
      if (obj[cur]) {
        return false;
      } else {
        obj[cur] = 1;
      }
    }
  }
  return true;
}

function createCube() {
  let result = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let i = 0; i < 3; i++) {
      row.push([]);
    }
    result.push(row);
  }
  return result;
}
// method 1
function sudoku2(grid) {
  let result;
  let cubes = createCube();

  // check row
  for (let row of grid) {
    result = hasNoDuplicates(row);
    if (!result) return false;
  }

  // check col
  for (let i = 0; i < grid[0].length; i++) {
    let col = [];
    for (let j = 0; j < grid.length; j++) {
      col.push(grid[j][i]);
    }
    result = hasNoDuplicates(col);
    if (!result) return false;
  }

  // fill the cube
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let targetRow = Math.floor(r / 3);
      let targetCol = Math.floor(c / 3);
      cubes[targetRow][targetCol].push(grid[r][c]);
    }
  }

  // check each cube
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      result = hasNoDuplicates(cubes[r][c]);
      if (!result) return false;
    }
  }

  return true;
}
// Method one
// check if each row/columns has duplicates
// subdivide input grid to 3x3 , and push all elements to the coresponding grid
// check if has duplicates again

// will take n space
// speed will be (9*n) * 9
