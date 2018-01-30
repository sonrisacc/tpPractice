// this will not work, because  cur will eventually point to tempCur, where it's cur.next, so furthur edition will be done at head.next instead of the head itself

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const sortList = function(head) {
  if (head == null || head.next == null) return head;

  let helper = new ListNode(0);
  let cur = head; // {3, 1, 2, 7}
  let pre = helper;
  let next = null;

  while (cur !== null && cur.next !== null) {
    if (cur.val > cur.next.val) {
      pre = cur.next; // {1-> 2 -> 7}
      next = pre.next; // {2 -> 7}
      cur.next = next; // {2->7}    cur: {3, 2, 7}
      pre.next = cur; // {3,2,7}   pre: {1,3,2,7}
      pre = helper; // {1,3,2,7}
    }
    cur = next; // {2,7}
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
