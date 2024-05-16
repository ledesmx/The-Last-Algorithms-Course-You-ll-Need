import { describe, test, expect } from "bun:test";
import { Stack } from "./stack.ts";

describe("#push", () => {
    test("Push 5 nodes", () => {
        const s = new Stack<number>();
        expect(s.length).toBe(0);

        s.push(2);
        expect(s.length).toBe(1);

        s.push(5);
        s.push(1);
        s.push(0);
        s.push(9);
        expect(s.length).toBe(5);
    });
});
describe("#peek", () => {
    test("There is no nodes", () => {
        const s = new Stack<number>();
        expect(s.peek()).toBeUndefined();
    });
    test("Push nodes and peek. 3 Times.", () => {
        const s = new Stack<string>();

        s.push("Yes");
        expect(s.peek()).toBe("Yes");

        s.push("Hello");
        s.push("1234");
        expect(s.peek()).toBe("1234");

        s.push("NO");
        s.push("AAA");
        s.push("Michael");
        expect(s.peek()).toBe("Michael");
    });
});