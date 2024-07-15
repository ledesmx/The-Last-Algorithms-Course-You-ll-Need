import { describe, test, expect } from "bun:test";
import { MinHeap } from "./min_heap";

describe("#insert", () => {
  test("Insert in a void tree", () => {
    const heap = new MinHeap();
    heap.insert(5);
    const want = [5];
    expect(heap.getData()).toEqual(want);
  });
  test("Insert the greatest number", () => {
    const heap = new MinHeap([10, 35, 50]);
    heap.insert(70);
    const want = [10, 35, 50, 70];
    expect(heap.getData()).toEqual(want);
  });
  test("Insert the lowest number", () => {
    const heap = new MinHeap([10, 35, 50]);
    heap.insert(5);
    const want = [5, 10, 50, 35];
    expect(heap.getData()).toEqual(want);
  });
  test("Insert in the middle", () => {
    const heap = new MinHeap([10, 35, 50, 40, 60, 55]);
    heap.insert(20);
    const want = [10, 35, 20, 40, 60, 55, 50];
    expect(heap.getData()).toEqual(want);
  });
});
