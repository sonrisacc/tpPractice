// what is a closure

function whatIsClosure() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

const thisIsIt = whatIsClosure();
// thisIsIt[0]();
// thisIsIt[1]();
// thisIsIt[2]();

// usage of closure
function addOrMinus(input) {
  if (input === 'minus') {
    return function(a, b) {
      return a - b;
    };
  }
  if (input === 'plus') {
    return function(a, b) {
      return a + b;
    };
  }
}

let getSum = addOrMinus('plus');
let getDiff = addOrMinus('minus');

console.log(getSum(2, 1));
console.log(getDiff(2, 1));
