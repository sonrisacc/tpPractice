// https://javascript.info/dom-navigation
console.log('working');
// on thead
// click on nth th
// in tbody
// rearrange tr according to nth td's value

// use bubble sort?

let table = document.querySelector('table');

const swap = (i, j, arr) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return;
};

const sortTable = columnNumber => {
  let tableBody = document.querySelector('tbody');
  let newArr = Array.from(tableBody.rows);
  tableBody.innerHTML = '';
  while (true) {
    let shouldSwap = false;
    for (let i = 0; i < newArr.length - 1; i++) {
      let a = newArr[i].cells[columnNumber].textContent;
      let b = newArr[i + 1].cells[columnNumber].textContent;
      if (typeof Number(a) === 'number' && Number(a) > Number(b)) {
        shouldSwap = true;
        swap(i, i + 1, newArr);
      }
    }
    if (!shouldSwap) break;
  }
  newArr.forEach(cur => {
    tableBody.append(cur);
  });
  return newArr;
};

const clickHandler = event => {
  let columnIndex = event.target.cellIndex;
  sortTable(columnIndex);
};

table.addEventListener('click', clickHandler);
