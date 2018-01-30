function ListNode(val) {
  this.val = val;
  this.next = null;
}

const insertionSortList = function(head) {
  if (head == null) return head;
  let helper = new ListNode(0); // new starter of the sorted list
  let cur = head; // the node will be inserted
  let pre = helper; // insert node between pre and pre.next
  let next = null; // the next node will be inserted

  // an outer loop iterate through whole list
  while (cur != null) {
    next = cur.next;
    // find the right place to insert
    while (pre.next != null && pre.next.val < cur.val) {
      pre = pre.next;
    }
    // insert between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;

    pre = helper;
    cur = next;
  }

  return helper.next;
};

let input = {
  val: 3,
  next: {
    val: 1,
    next: { val: 4, next: { val: 2, next: { val: 8, next: null } } }
  }
};
let output = insertionSortList(input);
console.log(output);
/*
an outer loop iterate through whole list,
growing a sorted list behind cur node
a inner while loop, keep sorting node on the left till find the cut postion to insert cur node

big-O:
  speed:  best case: linear, already a sorted list
          worst case: n^2

*/

/*
 
input: {3, 1, 4, 2, 8}
           ^
          cur
 {dummyHead, null} 
  |
  -> dummyHead, {3,null}      next = {1,4,2,8}
    |
    -> dummyHead, 1: {3,null}      next = {4,2,8}
      |
      -> dummyHead, 1: {3,null}      next = {2,8}
                    ^
                  1 vs 4  
                        ^
                      3 vs 4 
                          |
                          -> dummyHead, 1: {3,{4,null}}      next = {8}
                            |
                            -> dummyHead, 1:2:{{3,{4,null}}}      next = {}

*/
