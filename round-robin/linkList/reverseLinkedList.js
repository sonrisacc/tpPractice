const reverseList = function(head) {
  let pre = null;
  let cur = head;
  while (!!cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
};

/*


// O(n) time, O(1) space
// goint through every node, so O(n)
// O(1)  will need to mutate the original linked list

// iterate throguh the list,
// at cur,
  // use temp to:  hold reamined list
  // reasign cur.next with presaved val
  // update presaved val to reassigned cur
  // make cur to point to it's next

//
pre = null
cur = {a b c  }

a --> b --> c
@ a
 nextTem = {b c}
 cur.next = pre (null)
 pre = cur ({a --> null})
 cur = nextTem({b c} )
@ b
 nextTem = {c}
 cur.next = pre ({a})
 pre = cur ({b --> a --> null})
 cur = nextTem({c})
@c
 nextTem = null
 cur.next = pre{ c --> b --> a ---> null}
 cur = nextTem (null)
 @null
 return  pre {c -->b --> a }

because it's obj, so we are just switching pointers. not real reasign

*/
