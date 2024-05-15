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

describe("#deque", () => {
    test("When the queue has no nodes", () => {
        const q =  new Queue<number>();

        const value = q.deque();
        expect(value).toBeNull();
        expect(q.length).toBe(0);
    });
    test("When the queue has already nodes", () => {
        const q = new Queue<string>();

        q.enqueue("1234");
        q.enqueue("ONE");
        q.enqueue("Yes");
        q.enqueue("false")

        expect(q.deque()).toBe("1234");
        expect(q.length).toBe(3);
        expect(q.deque()).toBe("ONE");
        expect(q.length).toBe(2);
        expect(q.deque()).toBe("Yes");
        expect(q.length).toBe(1);
    });
});