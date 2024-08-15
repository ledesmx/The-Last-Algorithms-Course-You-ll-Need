import { expect, test } from "bun:test";
import { two_crystal_balls } from "./two_crystal_balls";

test("[0, 0, 0, 0, 1] -> 4", () => {
  expect(two_crystal_balls([false, false, false, false, true])).toBe(4);
});

test("[0, 1, 1, 1, 1] -> 1", () => {
  expect(two_crystal_balls([false, true, true, true, true])).toBe(1);
});

test("[1, 1, 1, 1, 1] -> 0", () => {
  expect(two_crystal_balls([true, true, true, true, true])).toBe(0);
});

test("[0, 0, 0, 0, 0] -> -1", () => {
  expect(two_crystal_balls([false, false, false, false, false])).toBe(-1);
});

test("[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1] -> 7", () => {
  expect(
    two_crystal_balls([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
    ]),
  ).toBe(7);
});

test("[] -> -1", () => {
  expect(two_crystal_balls([])).toBe(-1);
});

test("[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 -> 5", () => {
  expect(
    two_crystal_balls([
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ]),
  ).toBe(5);
});
