import { describe, test, expect } from "bun:test";
import { SLL } from "./linked_list.ts";

describe("Single Linked List", () => {
    test("#insertAtHead", () => {
        const ll = new SLL();
        ll.insertAtHead(5);
        ll.insertAtHead(10);
        expect(ll.length).toBe(2);
        expect(ll.head?.next?.value).toBe(5);
        expect(ll.head?.value).toBe(10);
    })
})