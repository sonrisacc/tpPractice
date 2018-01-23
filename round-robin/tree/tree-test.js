// test for basic tree
// let root = new Tree(0);
// root.addChild(3);
// let branch1 = root.addChild(1);
// branch1.addChild(2);
// console.log(JSON.stringify(root.map(cur => cur + 2), null, 2));
// console.log(root.countLeaves());
// console.log(JSON.stringify(root, null, 2));

// test for DF
// const root1 = new Tree(1);
// const branch2 = root1.addChild(2);
// const branch3 = root1.addChild(3);
// const leaf4 = branch2.addChild(4);
// const leaf5 = branch2.addChild(5);
// const leaf6 = branch3.addChild(6);
// const leaf7 = branch3.addChild(7);
// const output1 = root1.dFselect(function(value, depth) {
//   return value % 2;
// });
// // [1, 5, 3, 7]
//
// const output2 = root1.dFselect(function(value, depth) {
//   return depth === 1;
// });
// // [2, 3]
// console.log(output1);
// console.log(output2);

// test for BF
// const root1 = new Tree(1);
// const branch2 = root1.addChild(2);
// const branch3 = root1.addChild(3);
// const leaf4 = branch2.addChild(4);
// const leaf5 = branch2.addChild(5);
// const leaf6 = branch3.addChild(6);
// const leaf7 = branch3.addChild(7);
//
// console.log(
//   root1.bFselect((value, depth) => {
//     return value % 2;
//   })
// );
// // [1, 3, 5, 7]
//
// console.log(
//   root1.bFselect((value, depth) => {
//     return depth === 1;
//   })
// );
// // [2, 3]
