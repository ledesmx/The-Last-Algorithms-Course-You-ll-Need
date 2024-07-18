export type TrieNode = {
  keys: TrieNode[];
  isWord: boolean;
}

export class Trie {
  private root: TrieNode;
  constructor() {
    this.root = genTrieNode();
  }
  add(word: string) {
    
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

export function getCharIndex(char: string): number {
  const zero = "a".charCodeAt(0);
  const index = char.charCodeAt(0) - zero;
  return index;
}
export function genTrieNode(isWord = false): TrieNode {
  const keys: TrieNode[] = [];
  return { keys, isWord };
}
