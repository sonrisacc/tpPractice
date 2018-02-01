// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
  if (a == null || b == null) {
    return null;
  }
  a = reverseList(a);
  b = reverseList(b);
  let dummy = new ListNode(1);
  cur = dummy;
  let carriedOver;
  while (a !== null || b !== null) {
    let aVal = a != null ? a.value : 0;
    let bVal = b != null ? b.value : 0;
    let sum = !!carriedOver ? aVal + bVal + 1 : aVal + bVal;
    carriedOver = sum > 9999 ? true : false;
    cur.next = new ListNode(sum % 10000);
    cur = cur.next;
    a = a != null ? a.next : a;
    b = b != null ? b.next : b;
  }
  if (carriedOver) cur.next = new ListNode(1);
  console.log(dummy);
  return reverseList(dummy.next);
}

function reverseList(head) {
  let cur = head;
  let pre = null;
  while (cur != null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

// 7:21--7:32 pause 8:33 9:22
// [0123, 0004, 0005]
// [0100, 0100, 0100]
//   223,  104   105
//
// [9876, 5432, 1999]
// [         1, 8001]
// [9876, 5434,    0]
//

// reverse the input
// 1999, 5432,9876
// 8001,    1
// --------------
//    0  5434 9876
// ^ reverse it back
// 9876,5434,0

// <---- addTwoNumber --->
// iterate through the list,
// while creating a new list
// sum = cur + cur value
// if sum = sum % 10, if sum > 10 carried over 1

// @1
// l1: curVal = 9
// l2: curVal = 1
// sum 0, carried over 1
// ......
// @6
// l1: curVal = 3
// l2: null
// sum = 3
// ......
//

// <---- reverseList --->
//
// {0 1 2 3}
// dummy
// cur = dummy
// cur.next ={0 1 2 3}
// pre = null
// temp

// @0
// temp = cur.next { 1 2 3}
// cur.next = pre   null
// pre = cur {0, null}
// cur = temp  { 1 2 3}

// @1
// temp = cur.next { 2 3}
// cur.next = pre {0, null}
// pre = cur {1, 0, null}
// cur = temp{2,3}
//
// @2
// temp = cur.next {3}
// cur.next = pre {1, 0, null}
// pre = cur {2, 1, 0, null}
// cur = temp{3}
//
// @3
// temp = cur.next {null}
// cur.next = pre {1, 0, null}
// pre = cur {3,2, 1, 0, null}
// cur = temp{null}
//
//
