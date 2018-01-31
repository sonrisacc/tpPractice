const majorityElement = function(nums) {
  let n = nums.length;
  let k = 3; // in this question, k=3 specifically
  let result = [];
  if (n == 0 || k < 2) return result;
  let candidates = [];
  let counts = [];
  for (let num of nums) {
    let settled = false;
    for (let i = 0; i < k - 1; i++) {
      if (candidates[i] == num) {
        counts[i]++;
        settled = true;
        break;
      }
    }
    if (settled) continue;
    for (let i = 0; i < k - 1; i++) {
      if (counts[i] == 0) {
        counts[i] = 1;
        candidates[i] = num;
        settled = true;
        break;
      }
    }
    if (settled) continue;
    for (let i = 0; i < k - 1; i++)
      counts[i] = counts[i] > 0 ? counts[i] - 1 : 0;
  }
  Array.fill(counts, 0);
  for (let num of nums) {
    for (let i = 0; i < k - 1; i++) {
      if (candidates[i] == num) {
        counts[i]++;
        break;
      }
    }
  }
  for (let i = 0; i < k - 1; i++)
    if (counts[i] > n / k) result.push(candidates[i]);
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
