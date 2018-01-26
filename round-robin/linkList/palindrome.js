// const isPalindrome = function(head) {
var mid = head;
var end = head;
var isEven = true;
var firstHalf = null;
var frontNode = null;

while (end.next !== null) {
  isEven = true;
  if (firstHalf === null) {
    firstHalf = new LinkedList(mid.val);
  } else {
    frontNode = firstHalf;
    firstHalf = new LinkedList(mid.val);
    firstHalf.next = frontNode;
  }
  mid = mid.next;
  end = end.next;
  if (end.next !== null) {
    end = end.next;
    isEven = false;
  }
}

if (!isEven) {
  mid = mid.next;
}

while (mid !== null) {
  // console.log(mid.val, firstHalf.val);
  if (mid.val !== firstHalf.val) {
    return false;
  }
  mid = mid.next;
  if (firstHalf !== null) {
    firstHalf = firstHalf.next;
  }
}
return true;

// };

// make two pointer slow, and fast, where fast's speed is slow X 2
// slow will be at mid when fast reachs the end
// while slow & fast proceed, reverse the first half of the list

// when fast reaches the end
// start while loop with slow
// compare revered list node with the remained list

// O(n) time, O(1) space
// goint through every node, so O(n)
// O(1)  will need to mutate the original linked list
