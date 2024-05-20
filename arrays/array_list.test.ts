import { describe, test, expect } from "bun:test";
import { ArrayList } from "./array_list.ts";

describe("#fromValues", () => {
    test("When length = 0", () => {
        const al = new ArrayList<number>();
        al.fromValues(2, 5, 7);

        expect(al.length).toBe(0);
        expect(al.capacity).toBe(0);

    });
    test("When values are less than the length", () => {
        const al = new ArrayList<number>(4);
        al.fromValues(2, 5, 7);

        expect(al.length).toBe(4);
        expect(al.capacity).toBe(4);
    });
    test("When values are greater than the length", () => {
        const al = new ArrayList<number>(2, 5);
        al.fromValues(2, 5, 7);

        expect(al.length).toBe(2);
        expect(al.capacity).toBe(5);
    });
});

describe("#getByIndex", () => {
    test("When the index is greater than the length", () => {
        const al = new ArrayList<number>(3);
        al.fromValues(2, 5, 7);

        expect(al.getByIndex(3)).toBeUndefined();
        expect(al.getByIndex(4)).toBeUndefined();
    });
    test("When the index is less than the length", () => {
        const al = new ArrayList<number>(3);
        al.fromValues(2, 5, 7);

        expect(al.getByIndex(2)).toBe(7);
        expect(al.getByIndex(1)).toBe(5);
        expect(al.getByIndex(0)).toBe(2);
    });
});

// describe("#setByIndex", () => {
//     test("Set with length of 0", () => {
//         const al = new ArrayList<number>();
//         al.setByIndex(1, 4);
//     });
//     test("Set")
// });