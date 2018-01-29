const sortList = function(head) {
  if (head == null || head.next == null) return head;
  let pre = head;
  let cur = head;
  let next = head.next;
  let temp;
  console.log(cur === head);
  while (cur !== null && next !== null) {
    if (cur.val > next.val) {
      temp = next.next;
      pre = next;
      cur.next = temp;
      next.next = cur;
      console.log('14', cur === head);
      cur = pre;
      console.log('cur', cur);
      console.log('pre', pre);
      console.log('15', cur === head);
      cur = cur.next;
      next = cur.next;
    } else {
      cur = cur.next;
      next = next.next;
    }
  }
  return next;
};

let input = { val: 3, next: { val: 1, next: { val: 2, next: null } } };
let output = sortList(input);
console.log(output);
// const space complexity, so sort in place
// acending? decending?
// if there's a loop?
//

/*
// if one or none node exists  return the input

// if more than 2 nodes,

---chop the cur.next off
  // temp = cur.next



{3 -> 1 -> 2-> 7}

cur.val vs cur.next
next = head.next

if cur > next
@ cur = {3 -> 1 -> 2-> 7}
temp = next.next {2 -> 7}
cur.next = temp; cur = // {3 -> 2 -> 7}
next.next =cur {3 ->2 -> 7}   // next = {1, 3, 2, 7}
cur = next.next; { 3, 2, 7 }
next = cur.next; {2, 7}

@ cur = { 3 -> 2-> 7}
cur.val vs next .val
3 >2
temp = next.next {7}
cur.next = temp; cur = // {3 -> 7}
next.next = cur {3 -> 7}   // next = {2, 3, 7}
cur = next.next {3, 7};
next = cur.next; {7}

@ cur = { 3-> 7}
cur.val vs next .val
3< 7
 next = next.next null
*/
