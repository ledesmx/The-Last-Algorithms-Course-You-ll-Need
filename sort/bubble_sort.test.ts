import { expect, test } from "bun:test";
import { bubble_sort } from "./bubble_sort";

test("[5, 8, 1, 2, 7, 9, 0, 3, 4, 6]", () => {
    let list = [5, 8, 1, 2, 7, 9, 0, 3, 4, 6];
    bubble_sort(list);
    expect(list).toBe([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("[9, -2, 4, -1, 0, -5, -9, 5, 1, 2, -4]", () => {
    let list = [9, -2, 4, -1, 0, -5, -9, 5, 1, 2, -4];
    bubble_sort(list);
    expect(list).toBe([-9, -5, -4, -2, -1, 0, 1, 2, 4, 5, 9]);
});

test("[]", () => {
    let list: number[] = [];
    bubble_sort(list);
    expect(list).toBe([]);
});

test("[1]", () => {
    let list = [1];
    bubble_sort(list);
    expect(list).toBe([1]);
});

test("[99, 11]", () => {
    let list = [99, 11];
    bubble_sort(list);
    expect(list).toBe([11, 99]);
});

test("[2000, 12, -666, 123, -999, 1500, -1999, -24]", () => {
    let list = [2000, 12, -666, 123, -999, 1500, -1999, -24];
    bubble_sort(list);
    expect(list).toBe([-1999, -999, -666, -24, 12, 123, 1500, 2000]);
});

test("[-100000, 0, 900, 10001, -99999, 1, 901, 10002, -99998, 2, 902, 10003, -99997, 3, 903, 10004, -99996, 4, 904, 10005]", () => {
    let list = [-100000, 0, 900, 10001, -99999, 1, 901, 10002, -99998, 2, 902, 10003, -99997, 3, 903, 10004, -99996, 4, 904, 10005];
    bubble_sort(list);
    expect(list).toBe([-100000, -99999, -99998, -99997, -99996, 0, 1, 2, 3, 4, 900, 901, 902, 903, 904, 10001, 10002, 10003, 10004, 10005]);
});