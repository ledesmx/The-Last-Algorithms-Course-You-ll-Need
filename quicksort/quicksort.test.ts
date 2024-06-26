import { describe, test, expect } from "bun:test";
import { quicksort } from "./quicksort";

describe("Unsorted arrays", () => {
  test("Test 1", () => {
    const arr = [4, 9, 2, 5, 7, 1, 8, 3, 6];
    quicksort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("Test 2", () => {
    const arr = [2, -5, 5, 7, -1, 0, 3, 9, 4];
    quicksort(arr);
    expect(arr).toEqual([-5, -1, 0, 2, 3, 4, 5, 7, 9]);
  });
});

describe("Arrays with repeated numbers", () => {
  test("Test 3", () => {
    const arr = [12, 10, 0, 12, 0, 1, 10, 1, 12, 5, 5, 15, 14, 12];
    quicksort(arr);
    expect(arr).toEqual([0, 0, 1, 1, 5, 5, 10, 10, 12, 12, 12, 12, 14, 15]);
  });
  test("Test 4", () => {
    const arr = [7, 7, 8, 2, 9, 8, 7, 1, 1, 6, 5];
    quicksort(arr);
    expect(arr).toEqual([1, 1, 2, 5, 6, 7, 7, 7, 8, 8, 9]);
  });
});

describe("Inverted array", () => {
  test("Test 5", () => {
    const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
    quicksort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

describe("Sorted array", () => {
  test("Test 6", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    quicksort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
