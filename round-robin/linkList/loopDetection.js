// const hasLoop = function(linkedList) {
//   let fast = linkedList;
//   let slow = linkedList;
//   let pause = true;
//   while (!!fast.next) {
//     if (fast.val === slow.val) return true;
//     if (!pause) slow = slow.next;
//     fast = fast.next;
//     pause = !pause;
//   }
//   return false;
// };

const hasCycle = function(head) {
  let slow = head;
  let fast = head.next;
  while (fast != null) {
    if (slow.val == fast.val) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

/*
// slow and quick pointer, where if there is loop, quick pointer will over lay with the slow pointer
// big-O: linear, since the slow pointer is almost going through the whole list

// {3 -> 5 -> 6 -> 9 -> 10}
//                |     |
                 4  <-  7
   ^          ^
  slow      fast

  3, 5
  5, 9,
  6, 7,
  9, 9 --> same

*/
