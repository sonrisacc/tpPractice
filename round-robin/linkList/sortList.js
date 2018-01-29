const sortList = function(head) {
  if (head == null || head.next == null) return head;
  let cur = head; // {3, 1, 2, 7}
  console.log(cur === head);
  while (cur !== null && cur.next !== null) {
    console.log('head', head);
    if (cur.val > cur.next.val) {
      let tempCur = cur.next; // {1-> 2 -> 7}
      cur.next = tempCur.next; // {2->7}    cur: {3, 2, 7}
      tempCur.next = cur; // {3,2,7}   tempCur: {1,3,2,7}
      cur = tempCur; // {1,3,2,7}
      console.log('cur', cur);
    }
    cur = cur.next;
  }
  return head;
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
