function ListNode(val) {
  this.val = val;
  this.next = null;
}

function merge(l1, l2) {
  let dummy = new ListNode();
  let node = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }
  if (l1) node.next = l1;
  if (l2) node.next = l2;
  return dummy.next;
}

const sortList = function(head) {
  if (!head || !head.next) return head;
  let slow = head; // {3 -> 1 -> 2-> 7}
  let fast = head.next; // {1 -> 2-> 7}

  while (fast && fast.next) {
    slow = slow.next; // {1 -> 2-> 7}
    fast = fast.next.next; // {7}
  }

  let l1 = head;
  let l2 = slow.next; // {2-> 7}
  slow.next = null;

  return merge(sortList(l1), sortList(l2));
};

// Stratergy :   big-O: speed, nlogn for merge sort
// spliting the list,
// have two pointer : slow && fast
// when fast reaches the end, slow is at n/2
// slow --> list 1,  slow.next --> list 2
// merge and sort l1 and l2

// merge the list
// base case  example
// l1: {val:3, next:null}
// l2: {val:1, next:null}
// if l1.val > l2.val
// l2.next = l1

// calling on this recursively

let input = {
  val: 3,
  next: { val: 1, next: { val: 2, next: { val: 7, next: null } } }
};
let output = sortList(input);
console.log(JSON.stringify(output));
