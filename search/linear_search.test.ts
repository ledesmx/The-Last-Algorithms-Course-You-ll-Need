import { expect, test } from "bun:test";
import { linear_search } from "./linear_search";

test("[1, 5, 98, 2] - 5 -> true", () => {
  expect(linear_search([1, 5, 98, 2], 5)).toBe(true);
});

test("[1, 5, 98, 2] - 10 -> false", () => {
  expect(linear_search([1, 5, 98, 2], 10)).toBe(false);
});

test("[-15, 500, 1000, 123, -135, 1345, -556, -3, 145, 0, 4, 777] - 777 -> true", () => {
  expect(
    linear_search(
      [-15, 500, 1000, 123, -135, 1345, -556, -3, 145, 0, 4, 777],
      777,
    ),
  ).toBe(true);
});

test("[-15, 500, 1000, 123, -135, 1345, -556, -3, 145, 0, 4, 777] - 999 -> false", () => {
  expect(
    linear_search(
      [-15, 500, 1000, 123, -135, 1345, -556, -3, 145, 0, 4, 777],
      999,
    ),
  ).toBe(false);
});
