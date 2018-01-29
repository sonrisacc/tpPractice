const mergeTwoLists = function(l1, l2) {
  let dumbHead = { val: null, next: null };
  let cur = dumbHead;

  while (l1 !== null && l2 !== null) {
    cur.next = l1.val <= l2.val ? l1 : l2;
    if (l1.val <= l2.val) l1 = l1.next;
    if (l1.val > l2.val) l2 = l2.next;
    cur = cur.next;
  }

  if (l1 == null) cur.next = l2;
  if (l2 == null) cur.next = l1;
  return dumbHead.next;
};

const mergeTwoLists = function(l1, l2) {
  let dumbHead = new ListNode(0);
  let cur = dumbHead;

  while (l1 !== null && l2 !== null) {
    cur.next = l1.val <= l2.val ? l1 : l2;
    if (l1.val <= l2.val) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
    cur = cur.next;
  }

  if (l1 == null) cur.next = l2;
  if (l2 == null) cur.next = l1;

  return dumbHead.next;
};
/*
l1: 2 -> 5
l2: 3  -> 9

@ 1st step
  2       3
  ^       ^
l1.val < l2.val
cur.next = l1  {2 -> {5}}
l1 = {5}
cur = cur.next  l1 {2 -> }

@ 2nd step
5 > 3
l1.val > l2.val
cur.next = l2 {2 -> 3 -> 9}
l2 = { 9 }
cur = cur.next l2 {3 ->  }


*/

const merge2ListsRecursive = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = merge2ListsRecursive(l1.next, l2);
    return l1;
  } else {
    l2.next = merge2ListsRecursive(l2.next, l1);
    return l2;
  }
};

// NOTE:  terrible solution, the stack size would be equal to the length of the merged list
/*

stratergy: recursively compare two cur list,

base case :
l1: 3
l2: 2

3 > 2
l2.next = l1



@ 1st step
l1: 2 -> 5
l2: 3  -> 9

merge ({2->5}, {3 -> 9})  @1
        ^          ^
        l1         l2
l1.val < l2.val
  ^        ^
  2        3
l1.next = merge (l1.next, l2) @2
                    ^      ^
                    5     {3 -> 9}

                    l1.val > l2.val
                      ^        ^
                      5        3
                    l2.next = merge (l2.next, l1) @3
                                      ^      ^
                                      9      5
                                      l1.val < l2.val
                                        ^        ^
                                        5        9
                                      l1.next = merge (l1.next, l2) @4
                                                        ^        ^
                                                        null      null


@1
{2 -> 3 -> 5 -> 9}
@2
l1.val = 2
l1.next = {3 -> 5 -> 9}
@3
l2.val  = 3
l2.next = {  5 --> 9}
@4
l1.val = 5
l1.next = 9
*/
