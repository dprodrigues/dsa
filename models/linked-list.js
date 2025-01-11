class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

module.exports = { Node, DoublyNode };
