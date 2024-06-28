import { describe, test, expect } from "bun:test";
import { pre_order_search } from "./tree_traversals";
import type { BinaryNode } from "./tree_traversals";

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
describe("#pre_order_search", () => {
  test("Balanced tree", () => {
    const l = genNode(9, 1, 4);
    const r = genNode(10, 3, 11);
    const tree = genNode(5, l, r);

    expect(pre_order_search(tree)).toEqual([5, 9, 1, 4, 10, 3, 11]);
  });
  test("Unbalanced tree", () => {
    let r = genNode(5, 7, 8);
    let l = genNode(0, 6, r);
    r = genNode(3, l, 2);
    l = genNode(7, 9, 8);
    l = genNode(1, l, 3);
    const tree = genNode(8, l, r);

    expect(pre_order_search(tree)).toEqual([8, 1, 7, 9, 8, 3, 3, 0, 6, 5, 7, 8, 2]);
  });
});
