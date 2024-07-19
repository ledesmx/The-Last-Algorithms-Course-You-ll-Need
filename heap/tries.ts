type TrieNode = {
  keys: TrieNode[];
  isWord: boolean;
}

export class Trie {
  private root: TrieNode;
  constructor(...words: string[]) {
    this.root = genTrieNode();
    for (let i=0; i < words.length; ++i) {
      this.add(words[i]);
    }
  }
  add(word: string): void {
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
  autocomplete(input: string): string | null {
    const node = this.getLastNode(input);
    if (node === null) {// Last Node does no exist in the Trie
      return null;
    }

    const word = this.getFirstWordFromInput(input, node);
    if (word === null) {// Not found any word
      return null;
    }
    return word;
  }
  private getLastNode(word: string): TrieNode | null {
    if (this.root.keys.length === 0) {
      return null;
    }
    let lastNode = this.root;
    for (let i=0; i < word.length; ++i) {
      const key = getCharIndex(word, i);
      if (lastNode.keys[key] === undefined) {
        console.log(word, "null")
        return null;
      }
      lastNode = lastNode.keys[key];
    }
    return lastNode;
  }
  private getFirstWordFromInput(input: string, currentNode: TrieNode): string | null {
    if (currentNode.isWord) {// Found a possible word
      return input;
    }
    for (let i=0; i < currentNode.keys.length; ++i) {
      if (currentNode.keys[i] !== undefined) {
        const char = getCharByIndexCode(i);
        return this.getFirstWordFromInput(`${input}${char}`, currentNode.keys[i]);
      }
    }
    return null;
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
export function getCharByIndexCode(index: number): string {
  const zero = "a".charCodeAt(0);
  const char = String.fromCharCode(index + zero);
  return char;
}
export function genTrieNode(isWord = false): TrieNode {
  const keys: TrieNode[] = [];
  return { keys, isWord };
}
