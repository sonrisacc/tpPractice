//
const TimeComplexity = {
  FIX_ME: 'wrong answer',
  CONSTANT: 'constant',
  LOGARITHMIC: 'logarithmic',
  LINEAR: 'linear',
  QUADRATIC: 'quadratic',
  EXPONENTIAL: 'exponential'
};

const innerForLoopTime = TimeComplexity.FIX_ME; // TODO: Update this
const innerForLoop = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      sum += array[i] + array[j];
    }
  }
  return sum;
};
