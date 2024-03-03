import { expect, test } from "bun:test";
import { binary_search } from "./binary_search";

test("[1..9], 9 -> true", () => {
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toBe(true);
});

test("[1..9], 1 -> true", () => {
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toBe(true);
});

test("[1..9], 10 -> false", () => {
    expect(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(false);
});

test("[-20--0--40], 0 -> true", () => {
    expect(binary_search([-20, -9, -7, -4, 0, 2, 15, 19, 20, 40], 0)).toBe(true);
});

test("[-20--40], 1 -> false", () => {
    expect(binary_search([-20, -9, -7, -4, 0, 2, 15, 19, 20, 40], 1)).toBe(false);
});

test("[-20--40], -19 -> false", () => {
    expect(binary_search([-20, -9, -7, -4, 0, 2, 15, 19, 20, 40], -19)).toBe(false);
});