import { describe, test, expect } from "bun:test"
import { Queue } from "./queue.ts"

describe("#enqueue", () => {
    test("When the queue has no nodes", () => {
        const q = new Queue<number>();
        expect(q.length).toBe(0);

        q.enqueue(200);
        expect(q.length).toBe(1);
        expect(q.head?.value).toBe(200);
        expect(q.head?.next).toBeUndefined();
        expect(q.tail?.value).toBe(200)
    });
    test("When the queue already has nodes", () => {
        const q = new Queue<string>();
        q.enqueue("hello");
        q.enqueue("run");

        expect(q.length).toBe(2)
        expect(q.head?.value).toBe("hello");
        expect(q.head?.next?.value).toBe("run");
        expect(q.tail?.value).toBe("run");

        q.enqueue("dark");
        expect(q.length).toBe(3)
        expect(q.head?.value).toBe("hello");
        expect(q.tail?.value).toBe("dark");
    })
});