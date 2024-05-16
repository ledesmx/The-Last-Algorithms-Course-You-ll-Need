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