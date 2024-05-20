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

// describe("#setByIndex", () => {
//     test("Set with length of 0", () => {
//         const al = new ArrayList<number>();
//         al.setByIndex(1, 4);
//     });
//     test("Set")
// });