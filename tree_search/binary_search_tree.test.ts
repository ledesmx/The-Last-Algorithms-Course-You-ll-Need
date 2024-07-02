import { describe, test, expect } from "bun:test";
import { BST } from "./binary_search_tree";
import type { BinaryNode } from "./binary_search_tree";
import { compare } from "./binary_tree_comparison";

function genNode(value: number, left: number | null | BinaryNode<number>, right: number | null | BinaryNode<number>): BinaryNode<number> {
  let l;
  if (left === null) {
    l = null;
  } else if (typeof left === "number") {
    l = { value: left, left: null, right: null }
  } else {
    l = left;
  }
  let r;
  if (right === null) {
    r = null;
  } else if (typeof right === "number") {
    r = { value: right, left: null, right: null }
  } else {
    r = right;
  }

  return { value, left: l, right: r };
}

test("#Find", () => {
  let r = genNode(9, 8, 10);
  let l = genNode(5, 4, 6);
  r = genNode(7, l, r);
  l = genNode(1, 0, 2);
  const root = genNode(3, l, r);

  const tree = new BST(root);
  expect(tree.find(0)).toBe(true);
  expect(tree.find(4)).toBe(true);
  expect(tree.find(8)).toBe(true);
  expect(tree.find(11)).toBe(false);
});

describe("#Insert", () => {
  test("Create simple tree from scratch", () => {
    const expectedTree = genNode(3, 1, 7);

    const tree = new BST();
    tree.insert(3, 7, 1);
    expect(tree.root).toEqual(expectedTree);
  });

  test("Create complicated tree from scratch", () => {
    let r = genNode(15, 10, 20);
    r = genNode(9, null, r);
    let l = genNode(5, 4, 6);
    r = genNode(7, l, r);
    l = genNode(2, 2, 3);
    l = genNode(1, 0, l);
    const expectedTree = genNode(3, l, r);

    const tree = new BST();
    tree.insert(3, 7, 1, 5, 4, 6, 9, 0, 2, 15, 20, 10, 3, 2);
    expect(tree.root).toEqual(expectedTree);
  });
});
