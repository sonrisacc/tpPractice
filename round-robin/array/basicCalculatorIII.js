const calculate = function(s) {
  let numbs = /[0-9]/;
  let signs = { '+': '+', '-': '-', '*': '*', '/': '/' };
  let result = 0;
  let stack = []; // stack to simulate recursion
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    // iterate through inputstring
    let c = s.charAt(i);
    if (c == '(') {
      let block = '';
      let prantenses = [];
      while (i + 1 < s.length) {
        let cur = s.charAt(i + 1);
        if (s.charAt(i + 1) == '(') {
          prantenses.push(s.charAt(i + 1));
        }
        if (s.charAt(i + 1) == ')') {
          if (prantenses.length > 0) {
            prantenses.pop();
          } else if (prantenses.length == 0) break;
        }
        block += cur;
        i++;
      }

      let blockVal = calculate(block);
      if (sign == '+') {
        stack.push(blockVal);
      } else if (sign == '-') {
        stack.push(-blockVal);
      } else if (sign == '*') {
        stack.push(stack.pop() * blockVal);
      } else if (sign == '/') {
        stack.push(stack.pop() / blockVal);
      }
    } else if (numbs.test(c)) {
      // if cur letter is a number
      let val = c;
      while (i + 1 < s.length && numbs.test(s.charAt(i + 1))) {
        // find where the number ends
        let cur = s.charAt(i + 1);
        val += cur;
        i++;
      }

      val = Number(val);
      if (sign == '+') {
        stack.push(val);
      } else if (sign == '-') {
        stack.push(-val);
      } else if (sign == '*') {
        stack.push(stack.pop() * val);
      } else if (sign == '/') {
        stack.push(stack.pop() / val);
      }
    } else if (signs[c]) {
      sign = c;
    }
  }

  while (stack.length > 0) {
    result += stack.pop();
  }
  return Math.floor(result);
};

let output = calculate('(2+6* 3+5- (3*14/7+2)*5)+3');
console.log(output);

/*
constrains:
// init >= 0
// + - * / () space
// 3.9 -> 3

input:
always valid
[-2147483648, 2147483647]

no built in eval() function

stratergy:
create a stack, save the number we found, clear the stack by adding all the values together
when saving the numbers,
if it's a - , save the value as negative
if * or / , pop the last value out from the stack,
and do operation first, and then save it back to stack
iterate through input string;

big-O: ??...
*/
/*

"()"" --> piority --> will need recursion/stack

// (3 + 1*5-(2*2+1)) + 3
   ^
@ (
find the paried ")"
evoke calculate((block of code that we just found))

[3] +
[3, 1] *
[3]  1*5
[3, 5] -

evoke calculate((block of code that we just found))
[3, 5, -5] +
[3,5,-5,3]

3+5+-5+3 = 6
return 6
 */
