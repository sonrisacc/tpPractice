const mergeTwoLists = function(l1, l2) {
  if (l1 == null && l2 == null) return null;
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  let dumbHead = { val: -1, next: null };
  let cur = dumbHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      cur.next = l2;
      l2 = l2.next;
    } else {
      cur.next = l1;
      l1 = l1.next;
    }
    cur = cur.next;
  }

  if (l1 == null) cur.next = l2;
  if (l2 == null) cur.next = l1;

  return dumbHead.next;
};

const mergeKLists = function(lists) {
  let k = -1;
  while (lists.length >= 2) {
    let tempList = [];
    for (k = lists.length - 1; k >= 0; k -= 2) {
      tempList.push(mergeTwoLists(lists[k], lists[k - 1]));
    }
    if (k === 0) tempList.push(lists[0]);
    lists = tempList;
  }
  return lists[0] || [];
};

// same with merge2sorted list
// merge 2 list as one  and add it to tempList
// when origin list = 0, merge the linked lists in tempList
