const transDoublyLinkedList = function(input) {
  let list = { head: null, tail: null, length: 0 };

  let pre = null;
  list.head = input;
  let cur = input;

  while (!!cur) {
    cur.pre = pre;
    pre = cur;
    if (!cur.next) list.tail = cur;
    cur = cur.next;
    list.length++;
  }
  return list;
};

const isPalindrome = function(head) {
  let list = transDoublyLinkedList(head);
  let result = true;
  for (let i = 0; i < Math.ceil(list.length / 2); i++) {
    if (list.head.val !== list.tail.val) {
      result = false;
    }
    list.head = list.head.next;
    list.tail = list.tail.pre;
  }
  return result;
};

// let ourput = isPalindrome({ val: 1, next: { val: 2, next: null } });
// console.log(ourput);
/*
// second method:
// turn the whole list into a doubly linked list
// and then find the middle of the list
// and expand from the middle


head  {a -> b -> c -> d }
pre = null
cur.next exists?

cur = head
cur.pre = pre
pre = cur
cur = cur.next

@ a
cur --> {pre: null, cur:a, next:{b -> c -> d}}
pre --> {pre: null, cur:a, next:{b -> c -> d}}
cur = cur. next   {b -> c -> d}

...

@d
cur= cru. next --> null



{val:1, pre:null, next:{val:b, pre:{} }}








// dont think the down below will work   (inital thoguhts)
----------------------------------------------------
// make two pointer slow, and fast, where fast's speed is slow X 2
// slow will be at mid when fast reachs the end
// while slow & fast proceed, reverse the first half of the list

// when fast reaches the end
// start while loop with slow
// compare revered list node with the remained list

// O(n) time, O(1) space
// goint through every node, so O(n)
// O(1)  will need to mutate the original linked list

/*
{a -> b }
 ^    ^
     fast

> {a -> b ->  b -> a }
        ^         ^
       slow      fast


{a -> b ->  c  --> d -> e}
            ^          ^
           slow       fast


{a -> b ->  c  --> d -> e ->f }
                   ^          ^
                 slow       fast

pre
cur = node

@ fast c
@ slow a
temp =cur.next  {b ->b -> c}
cur.next = pre
pre = cur  {a, null}
cur = temp  {b, b, c}

@ fast d
@ slow b
temp =cur.next  {b -> c}
cur.next = pre  {a, null}
pre = cur  {b, a, null}
cur = temp  {b, c}

@ fast null
@ slow b
pre {b, a}
cur b
b vs b ?   same  continue

@ fast null
@ slow c
a vs c?  false
*/
