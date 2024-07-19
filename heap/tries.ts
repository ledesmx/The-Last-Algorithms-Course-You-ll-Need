type TrieNode = {
  keys: TrieNode[];
  isWord: boolean;
}

export class Trie {
  private root: TrieNode;
  constructor() {
    this.root = genTrieNode();
  }
  add(word: string) {
    this.addWalk(word, 0, this.root);
  }
  private addWalk(word: string, wordIndex: number, currentNode: TrieNode) {
    const key = getCharIndex(word, wordIndex);
    if (currentNode.keys[key] === undefined) {
      currentNode.keys[key] = genTrieNode();
    }

    if (wordIndex === word.length - 1) {
      currentNode.keys[key].isWord = true;
      return;
    }
    this.addWalk(word, wordIndex + 1, currentNode.keys[key]);
  }
  autocomplete() {
    
  }
  getTrie(): TrieNode {
    const [...keys] = this.root.keys;
    const trie = genTrieNode();
    trie.keys = keys;
    return trie;
  }
}

export function getCharIndex(word: string, wordIndex: number = 0): number {
  const zero = "a".charCodeAt(0);
  const index = word.charCodeAt(wordIndex) - zero;
  return index;
}
export function genTrieNode(isWord = false): TrieNode {
  const keys: TrieNode[] = [];
  return { keys, isWord };
}
