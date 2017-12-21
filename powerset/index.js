// const powerSet = function(str) {
//   let strArr = str.split('');
//   let result = new Set();
//   function generator(remained, hadSoFar) {
//     hadSoFar = hadSoFar || '';
//     if (reamined.length === 0) return;
//
//     for (let i = 0; i < strArr.length - 1; i++) {
//       hadSoFar = strArr[i];
//       remained = strArr.splice(i);
//     }
//   }
//   generator(strArr);
//   return strArr;
// };
//
// module.exports = powerSet;
let arr = [1, 2, 3];
console.log(arr.splice(0));
console.log(arr);
