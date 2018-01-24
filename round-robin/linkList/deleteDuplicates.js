const deleteDuplicates = function(head) {
  let pre = null;
  let cur = head;
  while (cur != null && cur.next != null) {
    // if unique
    if (cur.val != cur.next.val) {
      pre = cur;
      cur = cur.next;
    } else {
      // keet going till find the next different node
      while (cur.next != null && cur.next.val == cur.val) {
        cur = cur.next;
      }

      if (pre != null) {
        // if there already an unfinished list, append to it
        pre.next = cur.next;
      } else {
        // if no list yet, add to it
        head = cur.next;
      }
      cur = cur.next;
    }
  }
  return head;
};
