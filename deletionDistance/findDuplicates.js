// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return '';
//   let shortest = strs.reduce((a, b) => (a.length <= b.length ? a : b));
//   //
//   // int low = 1;
//   // int high = minLen;
//   // while (low <= high) {
//   //     int middle = (low + high) / 2;
//   //     if (isCommonPrefix(strs, middle))
//   //         low = middle + 1;
//   //     else
//   //         high = middle - 1;
//   // }
//   // return strs[0].substring(0, (low + high) / 2);
// }

const longestCommonPrefix = function(strs) {
  if (strs === undefined || strs.length === 0) {
    return '';
  }
  return strs.reduce((acc, next) => {
    let i = 0;
    console.log(acc, next);
    // while (acc[i] && next[i] && acc[i] === next[i]) i++;
    return acc.slice(0, i);
  });
};
// private boolean isCommonPrefix(String[] strs, int len){
//     String str1 = strs[0].substring(0,len);
//     for (int i = 1; i < strs.length; i++)
//         if (!strs[i].startsWith(str1))
//             return false;
//     return true;
// }

let arr = ['aabb', 'aabc', 'aaaaaaa'];
console.log(longestCommonPrefix(arr));
// console.log(arr.reduce((a, b) => (a.length <= b.length ? a : b)));
// console.log(arr);
let str1 = 'aaa';

console.log(str1.startsWith('a'));
