const findPeakElement = function(nums, left, right) {
  left = left || 0;
  right = right || nums.length - 1;

  if (left === right) return left;
  let center = Math.floor((left + right) / 2);

  if (nums[center] < nums[center + 1]) {
    return findPeakElement(nums, center + 1, right);
  } else {
    if (center === 0) return center;
    return findPeakElement(nums, left, center);
  }
};

const input = [0, 1, 5, 2];
const output = findPeakElement(input);
console.log(output);

/*
leftIndex = 0
rightIndex = n
centerIndex = Math.floor((left + right) /2 );

//  center value >  center + 1 value?
  //yes --> peak at left
    //right = mid  - 1
    //findPeakElement()
  // no --> peak at the right
    //left = mid + 1
   //findPeakElement()

*/
