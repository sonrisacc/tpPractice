const maxProfit = function(input) {
  if (!Array.isArray(input)) return 0;

  let min = Math.min.apply(null, input);
  let curProfit = 0;
  let maxProfit = 0;
  let greenLight = false;

  for (let i = 0; i < input.length; i++) {
    if (min === input[i] && i !== input.length - 1) {
      greenLight = true;
    }
    if (greenLight && min < input[i]) {
      curProfit = input[i] - min;
      if (curProfit > maxProfit) {
        maxProfit = curProfit;
      }
    }
  }
  return maxProfit;
};

module.exports = maxProfit;
