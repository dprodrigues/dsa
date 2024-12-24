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

  preorder_traversal = () => {
    const res = [];
    this._preorder_traversal(this.root, res);

    return res;
  };

  inorder_traversal = () => {
    const res = [];
    this._inorder_traversal(this.root, res);

    return res;
  };

  postorder_traversal = () => {
    const res = [];
    this._postorder_traversal(this.root, res);

    return res;
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

  _preorder_traversal = (node, res) => {
    if (!node) {
      return;
    }

    res.push(node.val);

    this._preorder_traversal(node.left, res);
    this._preorder_traversal(node.right, res);
  };

  _inorder_traversal = (node, res) => {
    if (!node) {
      return;
    }

    this._inorder_traversal(node.left, res);
    res.push(node.val);

    this._inorder_traversal(node.right, res);
  };

  _postorder_traversal = (node, res) => {
    if (!node) {
      return;
    }

    this._postorder_traversal(node.left, res);
    this._postorder_traversal(node.right, res);

    res.push(node.val);
  };
}

let tree = new BinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(1);
tree.insert(10);
tree.insert(15);
tree.insert(7);

console.log(tree.search(4));
console.log(tree.search(6));

console.log(tree.preorder_traversal());
console.log(tree.inorder_traversal());
console.log(tree.postorder_traversal());
