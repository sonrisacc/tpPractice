const twoSum = function(nums, target) {
  let tempObj = {};

  for (let i = 0; i < nums.length + 1; i++) {
    tempObj[target - nums[i]] = i;
    if (nums[i + 1] in tempObj) {
      return [tempObj[nums[i + 1]], i + 1];
    }
  }
  return [];
};

// iterate through each element
// save -> obj { rest: originIndex }
// at cur, check if exists in obj
// out put obj[curVal], curIndex
// if none, return []

// this way it will take linear space, linear time
