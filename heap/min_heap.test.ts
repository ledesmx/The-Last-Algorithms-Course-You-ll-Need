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
describe("#pop", () => {
  test("Void heap", () => {
    const heap = new MinHeap();
    const got = heap.pop();
    const want = null;
    const expectedHeap: number[] = [];
    expect(got).toBe(want);
    expect(heap.getData()).toEqual(expectedHeap);
  });
  test("Heap with only one number (root)", () => {
    const heap = new MinHeap([5]);
    const got = heap.pop();
    const want = 5;
    const expectedHeap: number[] = [];
    expect(got).toBe(want);
    expect(heap.getData()).toEqual(expectedHeap);
  });
  test("Heap with only the root and one child", () => {
    const heap = new MinHeap([5, 20]);
    const got = heap.pop();
    const want = 5;
    const expectedHeap: number[] = [20];
    expect(got).toBe(want);
    expect(heap.getData()).toEqual(expectedHeap);
  });
  test("Heap with the root and two children", () => {
    const heap = new MinHeap([5, 20, 15]);
    const got = heap.pop();
    const want = 5;
    const expectedHeap: number[] = [15, 20];
    expect(got).toBe(want);
    expect(heap.getData()).toEqual(expectedHeap);
  });
  test("Heap with many children and heapify down the root", () => {
    const heap = new MinHeap([5, 15, 25, 20, 17, 35, 30]);
    const got = heap.pop();
    const want = 5;
    const expectedHeap: number[] = [15, 17, 25, 20, 30, 35];
    expect(got).toBe(want);
    expect(heap.getData()).toEqual(expectedHeap);
  });
});
