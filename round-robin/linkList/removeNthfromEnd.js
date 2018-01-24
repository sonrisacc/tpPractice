const removeNthFromEnd = function(head, n) {
  // if [1], 1
  if (!head || !head.next) return null;

  // if [1,2,3]2, [1,2]1
  let val = head.val === 0 ? 1 : 0;
  let newHead = new ListNode(val);
  newHead.next = head;

  let fast = newHead;
  let slow = newHead;

  // if n is valid
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (!!fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return newHead.next;
};
