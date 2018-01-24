const hasLoop = function(linkedList) {
  let fast = linkedList;
  let slow = linkedList;
  let pause = true;
  while (!!fast.next) {
    if (fast.val === slow.val) return true;
    if (!pause) slow = slow.next;
    fast = fast.next;
    pause = !pause;
  }
  return false;
};
