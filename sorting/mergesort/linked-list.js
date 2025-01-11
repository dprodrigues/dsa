const { Node } = require("../../models/linked-list");

function findMiddle(head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function merge(l1, l2) {
  let head = new Node();
  let tail = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }

    tail = tail.next;
  }

  tail.next = l1 || l2;

  return head.next;
}

function mergesort(head) {
  if (!head || !head.next) return head;

  const mid = findMiddle(head);
  const after = mid.next;
  mid.next = null;

  const left = mergesort(head);
  const right = mergesort(after);

  return merge(left, right);
}

const node7 = new Node(7);
const node1 = new Node(1, node7);
const node3 = new Node(3, node1);
const node9 = new Node(9, node3);

const list = mergesort(node9);

console.log("list:", list);
