// this will not work, because  cur will eventually point to tempCur, where it's cur.next, so furthur edition will be done at head.next instead of the head itself
const sortList = function(head) {
  if (head == null || head.next == null) return head;
  let cur = head; // {3, 1, 2, 7}
  let tempCur;
  while (cur !== null && cur.next !== null) {
    if (cur.val > cur.next.val) {
      tempCur = cur.next; // {1-> 2 -> 7}
      cur.next = tempCur.next; // {2->7}    cur: {3, 2, 7}
      tempCur.next = cur; // {3,2,7}   tempCur: {1,3,2,7}
      console.log(tempCur);
      cur = tempCur; // {1,3,2,7}
    }
    cur = cur.next; // {3,2,7}
  }
  return tempCur;
};

let input = {
  val: 3,
  next: { val: 1, next: { val: 2, next: { val: 7, next: null } } }
};
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
