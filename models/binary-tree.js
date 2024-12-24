class Node {
  constructor(val) {
    this.val = val;
    this.left = undefined;
    this.right = undefined;
  }
  toString() {
    return `${this.key}`;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert = (val) => {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }

    this._insert(this.root, val);
  };

  search = (val) => {
    return this._search(this.root, val);
  };

  _insert = (node, val) => {
    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
        return;
      }

      this._insert(node.left, val);
    } else if (val > node.val) {
      if (!node.right) {
        node.right = new Node(val);
        return;
      }

      this._insert(node.right, val);
    }
  };

  _search = (node, val) => {
    if (!node) {
      return false;
    }

    if (node.val === val) {
      return true;
    }

    if (node.val < val) {
      return this._search(node.right, val);
    }

    return this._search(node.left, val);
  };
}

let tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(9);

console.log(tree.search(4));
console.log(tree.search(6));
