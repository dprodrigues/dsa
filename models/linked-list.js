class Node {
  constructor(element, next) {
    this.element = element;
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
