function swapMe(curIndex, targetIndex, arr) {
  let temp = arr[curIndex];
  arr[curIndex] = arr[targetIndex];
  arr[targetIndex] = temp;
}

function groupingDishes(dishes) {
  let obj = {};
  dishes.forEach(cur => {
    for (let i = 1; i < cur.length; i++) {
      if (obj[cur[i]]) {
        let arr = obj[cur[i]];
        arr.push(cur[0]);
        obj[cur[i]] = arr.slice(0, 1).concat(arr.slice(1).sort());
      } else {
        obj[cur[i]] = [cur[i], cur[0]];
      }
    }
  });
  let result = Object.values(obj)
    .filter(cur => cur.length >= 3)
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0]));

  return result;
}

console.log(output);
// let obj = {}
// iterate through input dishes,
// for each row, start from the 2nd ele
// check if cur ingrident exists in obj or not
// obj[cur]?
// if true, push row[0](dish name) into it
// if not true, make obj[cur] : [row[0]];

// big-O:
// speed m*n,
// iterating through the dishes: n
// inside evey dishes, iterate through the ingradients: m
// space same as the input size

// method II
