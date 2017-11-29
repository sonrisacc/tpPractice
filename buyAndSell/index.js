/* Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/

//  [ 100,2200,300,400,500]
// the 2nd element is the price for day 2

// I: [] arr of numbers
// O: max profit ==> number
// C:

// E:

/*
Input: [7, 1, 5, 3, 6, 4]
Output: 5

max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
*/

// find the lowest first ,and then find the highest after it.
// if it's always decreasing then nvm

// what if invalid input?
// what if [4,1,1,4,4,4,4,4]
// [2,10,1,8]

// [4,2,10,18,1,1,1,1,1]

// obj{lowest: 0, lowe stIndex: -1, highest: 0, highestIndex: -1}
// for var i in arr
// if obj[lowest] > arr[i]
// update obj
// if obj[highest] < arr[i]
// update highest

const maxProfit = function(input) {
  if (!Array.isArray(input)) return 0;
  let min = Math.max.apply(null, input);

  let curProfit = 0;
  let maxProfit = 0;

  for (let i = 0; i < input.length; i++) {
    if (min > input[i]) {
      min = input[i];
    } else {
      curProfit = input[i] - min;
      if (curProfit > maxProfit) {
        maxProfit = curProfit;
      }
    }
  }
  return maxProfit;
};
//
// console.log(maxProfit([2, 4, 1]));
module.exports = maxProfit;
