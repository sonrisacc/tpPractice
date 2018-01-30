const remove9 = function(n) {
  let baseX = 9;
  let result = '';
  let remainder = 0;
  while (n > 0) {
    remainder = n % baseX;
    console.log('remainder', remainder);
    result = remainder + result; // easier to store the remainder in a string
    n = Math.floor(n / baseX);
    console.log('n', n);
  }
  return Number(result); //  convert the string back to integer
};

console.log(remove9(1200));
// stratergy: base- 9
// find how many 9 numbers the input hold
// how many 9s will determine, which digits we are at
// the remained will determine, what we show at that the digits

/*
 we use a while loop, keep dividing 9 

 100 / 9  = 11 --> left 1 
 result = '1'  
 11 / 9  =1 --> left 2   there are 11 of 9s, means we are at the 10 th
 result = '21' 
 2 / 9 --> left 1 
 result = '121'
 
*/
