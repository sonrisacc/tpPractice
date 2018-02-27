/*

[1,7,3,4]

--> 7*3*4,  1*3*4,  1*7*4, 1*7*3 

--> pre:     1,    1,      1*7, 1*7*3 
--> back:  7*3*4,  3*4      4 ,  1

*/

function getProductsOfAllIntsExceptAtIndex(input) {
  let temp = [];
  let initPre = 1;
  let initBack = 1;
  for (let i = 0; i < input.length; i++) {
    temp.push(initPre);
    initPre *= input[i];
  }

  for (let i = input.length - 1; i >= 0; i--) {
    temp[i] *= initBack;
    initBack *= input[i];
  }
  console.log(temp);
}

getProductsOfAllIntsExceptAtIndex([1, 7, 0, 4]);
