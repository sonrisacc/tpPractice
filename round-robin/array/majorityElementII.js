const majorityElement = function(nums) {
  if (nums == null || nums.length == 0) return [];
  let result = [];
  let number1 = nums[0];
  let number2 = nums[0];
  let count1 = 0;
  let count2 = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] == number1) count1++;
    else if (nums[i] == number2) count2++;
    else if (count1 == 0) {
      number1 = nums[i];
      count1 = 1;
    } else if (count2 == 0) {
      number2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  count1 = 0;
  count2 = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == number1) count1++;
    else if (nums[i] == number2) count2++;
  }
  if (count1 > n / 3) result.push(number1);
  if (count2 > n / 3) result.push(number2);
  return result;
};

let output = majorityElement([1, 1, 1, 1, 2, 3, 3, 3, 3]);
console.log(output);
// 4:19

/*
 [...n]
 find total of numbers where # >=Math.floor(n/3)

 constrains:
    linear time, constant space
 stratergies:
    iterate through the input arr
    save cur to obj
    filter keysArr where value >=Math.floor(n/3)
    ^ this will take extra space

  chosen stratergies:
    set a counter

*/
