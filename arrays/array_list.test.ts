import { describe, test, expect } from "bun:test";
import { ArrayList } from "./array_list.ts";

describe("#fromValues", () => {
    test("When capacity is 0 it throws an error", () => {
        const al = new ArrayList<number>();
        expect(() => {
            al.fromValues(2, 5, 7);
        }).toThrow("array capacity exceeded");
        expect(al.length).toBe(0);
        expect(al.capacity).toBe(0);

    });
    test("When the values are within the capacity it should works", () => {
        const al = new ArrayList<number>(4);
        al.fromValues(2, 5, 7);
        expect(al.length).toBe(3);
        expect(al.capacity).toBe(4);

        const al2 = new ArrayList<number>(3);
        al2.fromValues(2, 5, 7);
        expect(al2.length).toBe(3);
        expect(al2.capacity).toBe(3);
    });
    test("When values are greater than the capacity it throws an error", () => {
        const al = new ArrayList<number>(2);
        expect(() => {
            al.fromValues(2, 5, 7);
        }).toThrow("array capacity exceeded");
        expect(al.length).toBe(0);
        expect(al.capacity).toBe(2);
    });
});

describe("#getByIndex", () => {
    test("When the index is greater than the array it returns undefined", () => {
        const al = new ArrayList<number>(3);
        al.fromValues(2, 5, 7);
        expect(al.getByIndex(3)).toBeUndefined();
        expect(al.getByIndex(4)).toBeUndefined();
    });
    test("When the index is within the array it should works", () => {
        const al = new ArrayList<number>(3);
        al.fromValues(2, 5, 7);
        expect(al.getByIndex(2)).toBe(7);
        expect(al.getByIndex(1)).toBe(5);
        expect(al.getByIndex(0)).toBe(2);
    });
    test("When the index is within the capacity bun out of length it returns undefined", () => {
        const al = new ArrayList<number>(3);
        expect(al.getByIndex(2)).toBeUndefined();
        expect(al.getByIndex(0)).toBeUndefined();
    });
    test("When the index is less than 0 it returns undefined", () => {
        const al = new ArrayList<number>();
        expect(al.getByIndex(-1)).toBeUndefined();
        expect(al.getByIndex(-5)).toBeUndefined();
    });
});

describe("#setAtIndex", () => {
    test("When the index is greater than the length", () => {
        const al = new ArrayList<number>();
        expect(() => al.setAtIndex(1, 4)).toThrow("array list index out of length");
        expect(al.length).toBe(0);
        expect(al.capacity).toBe(0);

        const al2 = new ArrayList<string>(3);
        al2.fromValues("a", "bb", "ccc");
        expect(() => al2.setAtIndex("dddd", 3)).toThrow("array list index out of length");
        expect(al2.length).toBe(3);
        expect(al2.capacity).toBe(3);

        const al3 = new ArrayList<string>(3);
        expect(() => al3.setAtIndex("hey", 1)).toThrow("array list index out of length");
        expect(al3.length).toBe(0);
        expect(al3.capacity).toBe(3);
    });
    test("When the index is less than 0", () => {
        const al = new ArrayList<string>(3);
        expect(() => al.setAtIndex("hey", -2)).toThrow("array list index is negative");
    });
    test("When the index is into the range of the length", () => {
        const al = new ArrayList<string>(5);
        al.fromValues("one", "two", "three", "four");
        al.setAtIndex("hello", 2);
        expect(al.getByIndex(2)).toBe("hello");
        al.setAtIndex("yes", 0);
        expect(al.getByIndex(0)).toBe("yes");
    });
});

describe("#push", () => {
    test("When capacity is zero", () => {
        const al = new ArrayList<string>();
        al.push("first");
        expect(al.length).toBe(1);
        expect(al.capacity).toBe(1);
        expect(al.getByIndex(0)).toBe("first");
    });
    test("When length is less than capacity", () => {
        const al = new ArrayList<string>(5);
        al.fromValues("1", "2", "3");
        al.push("4");
        expect(al.length).toBe(4);
        expect(al.capacity).toBe(5);
        expect(al.getByIndex(3)).toBe("4");
    });
    test("When length and capacity are the same", () => {
        const al = new ArrayList<string>(3);
        al.fromValues("1", "2", "3");
        al.push("4");
        expect(al.length).toBe(4);
        expect(al.capacity).toBe(6);
        expect(al.getByIndex(3)).toBe("4");
    });
});

describe("#pop", () => {
    test("When capacity is zero", () => {
        const al = new ArrayList<string>();
        expect(al.pop()).toBeUndefined();
    });
    test("When length is less than capacity", () => {
        const al = new ArrayList<string>(5);
        al.fromValues("1", "2", "3");
        expect(al.pop()).toBe("3");
        expect(al.length).toBe(2);
        expect(al.capacity).toBe(5);
    });
    test("When length and capacity are the same", () => {
        const al = new ArrayList<string>(3);
        al.fromValues("1", "2", "3");
        expect(al.pop()).toBe("3");
        expect(al.length).toBe(2);
        expect(al.capacity).toBe(3);
    });
});

describe("#enqueue", () => {
    test("when the array has no values", () => {
        const al =  new ArrayList<string>();
        al.enqueue("first");
        expect(al.length).toBe(1);
        expect(al.capacity).toBe(1);
        expect(al.getByIndex(0)).toBe("first");
    });
    test("When the length is less than the capacity", () => {
        const al = new ArrayList<string>(5);
        al.fromValues("AA", "BB", "CC");
        al.enqueue("ZZ");
        expect(al.length).toBe(4);
        expect(al.capacity).toBe(5);
        expect(al.getByIndex(0)).toBe("ZZ");
        expect(al.getByIndex(1)).toBe("AA");
    });
    test("When the length and capacity are the same", () => {
        const al = new ArrayList<string>(3);
        al.fromValues("AA", "BB", "CC");
        al.enqueue("ZZ");
        expect(al.length).toBe(4);
        expect(al.capacity).toBe(6);
        expect(al.getByIndex(0)).toBe("ZZ");
        expect(al.getByIndex(3)).toBe("CC");
    });
});

describe("#deque", () => {
    test("When the array has no values", () => {
        const al = new ArrayList<string>();
        expect(al.deque()).toBeUndefined();
        expect(al.length).toBe(0);
    });
    test("When the array has already values", () => {
        const al = new ArrayList<string>(5);
        al.fromValues("yes", "444", "noo", "bye", "like")
        expect(al.deque()).toBe("yes");
        expect(al.deque()).toBe("444");
        expect(al.deque()).toBe("noo");

        expect(al.getByIndex(0)).toBe("bye");
        expect(al.getByIndex(1)).toBe("like");
        expect(al.length).toBe(2);
        expect(al.capacity).toBe(5);
    });
});