const Node = function(data) {
  this.data = data;
  this.next = null;
};

// function insert(head, data) {
//   let cur = head;
//   // console.log('cur', cur);
//   // console.log('head', head);
//   while (cur.next != null) {
//     cur = cur.next;
//     // console.log('cur next', cur);
//     // console.log('head next', head);
//   }
//   cur.next = new Node(data);
//   // console.log('cur end', cur);
//   // console.log('head end', head);
//   return head;
// }
//
// let input = { data: 3, next: { data: 2, next: null } };
// let output = insert(input, 1);
// console.log(output);

function print(head) {
  let cur = head;
  let result = [];
  if (cur == null) {
    console.log('NULL');
    return;
  }
  while (cur != null) {
    result.push(cur.data);
    cur = cur.next;
  }
  console.log(result.join('\n'));
  return;
}

let input = {
  data: 5,
  next: null
};
let output = print(input);
