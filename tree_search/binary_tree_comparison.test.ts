import { describe, test, expect } from "bun:test";
import { compare } from "./binary_tree_comparison";
import type { BinaryNode } from "./binary_tree_comparison";

function genNode(
  value: number,
  left: number | null | BinaryNode<number>,
  right: number | null | BinaryNode<number>,
): BinaryNode<number> {
  let l;
  if (!left) {
    l = null;
  } else if (typeof left === "number") {
    l = { value: left, left: null, right: null };
  } else {
    l = left;
  }
  let r;
  if (!right) {
    r = null;
  } else if (typeof right === "number") {
    r = { value: right, left: null, right: null };
  } else {
    r = right;
  }

  return { value, left: l, right: r };
}

describe("Test values", () => {
  test("Identical trees", () => {
    let l = genNode(8, 9, 2);
    let r = genNode(1, l, 3);
    const tree = genNode(6, 3, r);
    l = genNode(8, 9, 2);
    r = genNode(1, l, 3);
    const tree2 = genNode(6, 3, r);

    expect(compare(tree, tree2)).toBe(true);
  });
  test("Non-identical trees", () => {
    let l = genNode(8, 2, 9);
    let r = genNode(1, l, 3);
    const tree = genNode(6, 3, r);
    l = genNode(8, 9, 2);
    r = genNode(1, l, 3);
    const tree2 = genNode(6, 3, r);

    expect(compare(tree, tree2)).toBe(false);
  });
});

describe("Test structure", () => {
  test("Identical trees", () => {
    let l = genNode(4, 2, 1);
    const tree = genNode(5, l, 3);
    l = genNode(4, 2, 1);
    const tree2 = genNode(5, l, 3);

    expect(compare(tree, tree2)).toBe(true);
  });
  test("Non-identical trees", () => {
    let l = genNode(4, 2, 1);
    const tree = genNode(5, l, 3);
    let r = genNode(3, 2, 1);
    const tree2 = genNode(5, 4, r);

    expect(compare(tree, tree2)).toBe(false);
  });
});
