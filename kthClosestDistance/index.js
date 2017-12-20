// find all the possibilities
// as rock paper sicor,

/* Being stupid and distracted
const pairDistance = (nums, k) =>{
  let arr = Array.from(nums);
  let result = []
  for(let i = 0; i < nums.length;i++){
    let left = arr.slice(i+1);
    let letter = arr[i];
    left.forEach(cur => {
      result.push(Math.abs(cur - letter))
    })
  }
  result = result.sort((a, b)=>(a - b))
  return result[k-1]!==undefined? result[k-1]:null

}

const arreg = [1,3,1];
const output = pairDistance(arreg, 1)
console.log(output)


// console.log(arreg)
// console.log(arreg.slice(3))
// console.log(arreg)
*/

// Binary search
// start index
// end index

var smallestDistancePair = function(nums, k) {};

const arreg = [-3, 2, -1, 1];
const output = smallestDistancePair(arreg, 1);
console.log(output);
