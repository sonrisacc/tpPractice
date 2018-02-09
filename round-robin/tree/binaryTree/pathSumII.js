// // not function properly
// const pathSum = function(root, sum) {
//   let stackArr = [];
//   let result = [];
//   let count = sum;
//   let temp = [];
//   if (!root) return result;
//   while (!!root || stackArr.length > 0) {
//     while (!!root) {
//       temp.push(root.val);
//       sum -= root.val;
//       stackArr.push(root);
//       root = root.left;
//     }
//     if (!root && sum == 0) {
//       result.push(temp.slice());
//     }
//     let a = temp.pop();
//     sum += a;
//     root = stackArr.pop();
//     root = root.right;
//   }
//   return result;
// };

function digitTreeSum(t) {
  if (t === null) return 0;
  let stack = [];
  let tempResult = [];
  let curNum = '';
  let cur = t;
  while (cur !== null || stack.length !== 0) {
    curNum += cur.value;
    if (cur.right !== null) stack.push(cur.right);

    cur = cur.left;
    if (cur === null && stack.length > 0) {
      tempResult.push(Number(curNum));
      cur = stack.pop();
      curNum = curNum.slice(0, -1);
    }
  }
  console.log(tempResult);
  return tempResult;
}
