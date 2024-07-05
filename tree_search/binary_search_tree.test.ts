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
describe("#Delete", () => {
  test("Delete root with no childs", () => {
    const tree = new BST();
    tree.insert(2);

    tree.delete(2);
    expect(tree.root).toBeNull();
  });
  test("Delete root with one child", () => {
    const tree = new BST();
    tree.insert(2, 8);

    tree.delete(2);
    expect(tree.root).toEqual(genNode(8, null, null));
  });
  test("Delete root with two children", () => {
    const tree = new BST();
    tree.insert(2, 4, -3);

    tree.delete(2);
    expect(tree.root).toEqual(genNode(-3, null, 4));
  });
  test("Delete root with two children on left side and one on right side", () => {
    const tree = new BST();
    tree.insert(8, 3, 0, 11);

    tree.delete(8);
    expect(tree.root).toEqual(genNode(3, 0, 11));
  });
  test("Delete root with many children on left side and one on right side", () => {
    const tree = new BST();
    tree.insert(8, 3, 0, 11, 5, 4, 7, 6);
    const expectedTree = new BST();
    expectedTree.insert(7, 3, 0, 11, 5, 4, 6);

    tree.delete(8);
    expect(tree.root).toEqual(expectedTree.root);
  });
  test("Delete node with no childs", () => {
    const tree = new BST();
    tree.insert(10, 5, 15);

    tree.delete(5);
    expect(tree.root).toEqual(genNode(10, null, 15));
  });
  test("Delete node with one child", () => {
    const tree = new BST();
    tree.insert(10, 5, 15, 30);

    tree.delete(15);
    expect(tree.root).toEqual(genNode(10, 5, 30));
  });
  test("Delete node with two children", () => {
    const tree = new BST();
    tree.insert(10, 5, 15, 11, 30);
    const expectedTree = new BST();
    expectedTree.insert(10, 5, 11, 30);

    tree.delete(15);
    expect(tree.root).toEqual(expectedTree.root);
  });
  test("Delete node with two children on left side and one on right side", () => {
    const tree = new BST();
    tree.insert(10, 5, 51, 25, 100, 15);
    const expectedTree = new BST();
    expectedTree.insert(10, 5, 25, 15, 100);

    tree.delete(51);
    expect(tree.root).toEqual(expectedTree.root);
  });
  test("Delete node with many children on left side and one on right side", () => {
    const tree = new BST();
    tree.insert(10, 5, 51, 25, 100, 15, 37, 30, 40, 39);
    const expectedTree = new BST();
    expectedTree.insert(10, 5, 40, 25, 100, 15, 37, 30, 39);

    tree.delete(51);
    expect(tree.root).toEqual(expectedTree.root);
  });
});
