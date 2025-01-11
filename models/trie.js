class TrieNode {
  constructor() {
    this.children = {};
    this.end = false;
  }
}

class Trie {
  constructor() {
    this._root = new TrieNode();
  }

  insert = (word) => {
    let curr = this._root;

    for (let ch of word) {
      if (!(ch in curr.children)) {
        curr.children[ch] = new TrieNode();
      }

      curr = curr.children[ch];
    }

    curr.end = true;
  };

  search = (word) => {
    let curr = this._root;

    for (let ch of word) {
      if (!(ch in curr.children)) {
        return false;
      }

      curr = curr.children[ch];
    }

    return curr.end;
  };
}

const trie = new Trie();

trie.insert("abc");
trie.insert("abcd");

console.log('trie.search("abc"):', trie.search("abc"));
console.log('trie.search("abcd"):', trie.search("abcd"));
console.log('trie.search("abce"):', trie.search("abce"));
