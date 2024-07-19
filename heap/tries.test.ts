import { describe, test, expect } from "bun:test";
import { Trie, getCharIndex, genTrieNode } from "./tries.ts"

describe("#add", () => {
  test("Trie without nodes", () => {
    const trie = new Trie();
    trie.add("run");

    const r = getCharIndex("r");
    const u = getCharIndex("u");
    const n = getCharIndex("n");
    const want = genTrieNode();
    let current = want.keys[r] = genTrieNode();
    current = current.keys[u] = genTrieNode();
    current.keys[n] = genTrieNode(true);

    const got = trie.getTrie();
    expect(got).toEqual(want);
  });
  test("Repeat the same word twice, do nothing", () => {
    const trie = new Trie();
    trie.add("run");
    trie.add("run");

    const r = getCharIndex("r");
    const u = getCharIndex("u");
    const n = getCharIndex("n");
    const want = genTrieNode();
    let current = want.keys[r] = genTrieNode();
    current = current.keys[u] = genTrieNode();
    current.keys[n] = genTrieNode(true);

    const got = trie.getTrie();
    expect(got).toEqual(want);
  });
  test("Extend the trie with a similar word (run -> runner)", () => {
    const trie = new Trie();
    trie.add("run");
    trie.add("runner");

    const r = getCharIndex("r");
    const u = getCharIndex("u");
    const n = getCharIndex("n");
    const e = getCharIndex("e");
    const want = genTrieNode();
    let current = want.keys[r] = genTrieNode();
    current = current.keys[u] = genTrieNode();
    current = current.keys[n] = genTrieNode(true);
    current = current.keys[n] = genTrieNode();
    current = current.keys[e] = genTrieNode();
    current.keys[r] = genTrieNode(true);

    const got = trie.getTrie();
    expect(got).toEqual(want);
  });
  test("Add two completely different words", () => {
    const trie = new Trie();
    trie.add("run");
    trie.add("two");

    const r = getCharIndex("r");
    const u = getCharIndex("u");
    const n = getCharIndex("n");
    const t = getCharIndex("t");
    const w = getCharIndex("w");
    const o = getCharIndex("o");
    const want = genTrieNode();
    // run
    let current = want.keys[r] = genTrieNode(); 
    current = current.keys[u] = genTrieNode();
    current.keys[n] = genTrieNode(true);
    // two
    current = want.keys[t] = genTrieNode(); 
    current = current.keys[w] = genTrieNode();
    current.keys[o] = genTrieNode(true);


    const got = trie.getTrie();
    expect(got).toEqual(want);
  });
  test("Add two words that start the same and then fork (mus- >ical >tang)", () => {
    const trie = new Trie();
    trie.add("musical");
    trie.add("mustang");

    const m = getCharIndex("m");
    const u = getCharIndex("u");
    const s = getCharIndex("s");
    const i = getCharIndex("i");
    const c = getCharIndex("c");
    const a = getCharIndex("a");
    const l = getCharIndex("l");
    const t = getCharIndex("t");
    const n = getCharIndex("n");
    const g = getCharIndex("g");
    const want = genTrieNode();
    // mus
    let current = want.keys[m] = genTrieNode(); 
    current = current.keys[u] = genTrieNode();
    current = current.keys[s] = genTrieNode();
    const snode = current;
    // musical
    current = snode.keys[i] = genTrieNode();
    current = current.keys[c] = genTrieNode();
    current = current.keys[a] = genTrieNode();
    current.keys[l] = genTrieNode(true);
    // mustang
    current = snode.keys[t] = genTrieNode(); 
    current = current.keys[a] = genTrieNode();
    current = current.keys[n] = genTrieNode();
    current.keys[g] = genTrieNode(true);


    const got = trie.getTrie();
    expect(got).toEqual(want);
  });
});
