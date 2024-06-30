import { describe, test, expect } from "bun:test";
import { bfs } from "./breadth_first_search";
import type { BinaryNode } from "./breadth_first_search";

function genNode(value: number, left: number | null | BinaryNode<number>, right: number | null | BinaryNode<number>): BinaryNode<number> {
  let l;
  if (!left) {
    l = null;
  } else if (typeof left === "number") {
    l = { value: left, left: null, right: null }
  } else {
    l = left;
  }
  let r;
  if (!right) {
    r = null;
  } else if (typeof right === "number") {
    r = { value: right, left: null, right: null }
  } else {
    r = right;
  }

  return { value, left: l, right: r };
}

describe("Balanced tree", () => {
  test("Find 1 -> true", () => {
    const l = genNode(2, 7, 6);
    const r = genNode(9, 3, 1);
    const tree = genNode(5, l, r);

    expect(bfs(tree, 1)).toBe(true);
  });
  test("Find 7 -> true", () => {
    const l = genNode(2, 7, 6);
    const r = genNode(9, 3, 1);
    const tree = genNode(5, l, r);

    expect(bfs(tree, 7)).toBe(true);
  });
  test("Find 10 -> false", () => {
    const l = genNode(2, 7, 6);
    const r = genNode(9, 3, 1);
    const tree = genNode(5, l, r);

    expect(bfs(tree, 10)).toBe(false);
  });
});
describe("Unbalanced tree", () => {
  test("Find 8 -> true", () => {
    let r = genNode(14, 20, 21);
    let l = genNode(10, 13, r);
    r = genNode(4, l, 11);
    l = genNode(3, 7, 8);
    const tree = genNode(1, l, r);

    expect(bfs(tree, 8)).toBe(true);
  });
  test("Find 20 -> true", () => {
    let r = genNode(14, 20, 21);
    let l = genNode(10, 13, r);
    r = genNode(4, l, 11);
    l = genNode(3, 7, 8);
    const tree = genNode(1, l, r);

    expect(bfs(tree, 20)).toBe(true);
  });
  test("Find 2 -> false", () => {
    let r = genNode(14, 20, 21);
    let l = genNode(10, 13, r);
    r = genNode(4, l, 11);
    l = genNode(3, 7, 8);
    const tree = genNode(1, l, r);

    expect(bfs(tree, 2)).toBe(false);
  });
});
