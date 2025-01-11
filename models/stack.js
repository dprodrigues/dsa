const { Node } = require("./linked-list");

class Stack {
  constructor() {
    this._tail = null;
    this._count = 0;
  }

  add = (val) => {
    const node = new Node(val, this._tail);
    this._tail = node;
    this._count++;
  };

  pop = () => {
    if (!this._count) {
      return null;
    }

    const node = this._tail;
    this._tail = node.next;
    this._count--;

    return node.val;
  };

  peek = () => {
    if (!this._count) {
      return null;
    }

    return this._tail.val;
  };

  size = () => {
    return this._count;
  };
}

const s = new Stack();

s.add(1);
s.add(2);
s.add(3);
console.log("s.size():", s.size());
console.log("s.pop():", s.pop());
console.log("s.peek():", s.peek());
console.log("s.size():", s.size());
console.log("s.pop():", s.pop());
console.log("s.pop():", s.pop());
console.log("s.pop():", s.pop());
console.log("s.pop():", s.size());
