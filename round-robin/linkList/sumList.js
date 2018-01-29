const addTwoNumbers = function(l1, l2) {
  let head = { val: null, next: null };
  let cur = head;
  let carriedOver = false;

  while (!!l1 || !!l2) {
    let a = !!l1 ? l1.val : 0;
    let b = !!l2 ? l2.val : 0;

    let sum = !!carriedOver ? a + b + 1 : a + b;

    if (sum > 9) carriedOver = true;

    cur.next = { val: sum % 10, next: null };
    cur = cur.next;

    l1 = !!l1 ? l1.next : l1;
    l2 = !!l1 ? l2.next : l2;
  }
  return head.next;
};

// let a = { val: 1, next: { val: 8, next: null } };
// let b = { val: 0, next: null };
// let output = addTwoNumbers(a, b);
// console.log(JSON.stringify(output));

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// constrain:  a new number-list
// big-o: since we are iterating the whole list, linear for time, linear for space

// iterate through the list
// add up the two cur.val
// if there is a carried over, add to the next number

/*

--> if carrier true  val + 1 <--

@ 2
cur.val =  2 + 5

@ 4
sum  = 4 + 6
val =  sum % 10
carrier = true

@3
sum = 3 + 4
because carrier = true
sum = 3+ 4 +1




*/
