function mergeInterval(arr) {
  if (arr.length <= 1) return arr;

  let newArr = Array.from(arr).sort((a, b) => (a.start > b.start ? 1 : -1));
  let prev = newArr[0];
  let result = [prev];

  for (let cur of newArr) {
    if (prev.end > cur.start) {
      let newEnd = Math.max(prev.end, cur.end);
      prev.end = newEnd;
    } else {
      result.push(cur);
      prev = cur;
    }
  }
  return result;
}

//
// const input = [
//   { start: 2, end: 6 },
//   { start: 0, end: 5 },
//   { start: 3, end: 7 }
// ];
// const input1 = [];
// const input2 = [{ start: 0, end: 7 }];
//
// const output = mergeInterval(input);
// const output1 = mergeInterval(input1);
// const output2 = mergeInterval(input2);
//
// console.log(output);
// console.log(output1);
// console.log(output2);
