import { describe, test, expect } from "bun:test";
import { SLL } from "./linked_list.ts";

describe("Single Linked List", () => {
    describe("#insertAtHead", () => {
        test("it adds the element to the beginning of the list", () => {
            const ll = new SLL();
            ll.insertAtHead(5);
            ll.insertAtHead(10);
            expect(ll.length).toBe(2);
            expect(ll.head?.next?.value).toBe(5);
            expect(ll.head?.value).toBe(10);
        });
    });
    describe("#fromValues", () => {
        test("With no value. It's null ", () => {
            const ll = new SLL();
            ll.fromValues();
            expect(ll.head).toBeNull();
        });
        test("It adds only one value", () => {
            const ll = new SLL();
            ll.fromValues(6);
            expect(ll.head?.value).toBe(6);
            expect(ll.length).toBe(1);
        });
        test("It adds many values", () => {
            const ll = new SLL();
            ll.fromValues(6, 8, 3, 0);
            expect(ll.length).toBe(4);
            expect(ll.head?.value).toBe(6);
            expect(ll.head?.next?.value).toBe(8);
        });
        test("It replace the current values with new ones", () => {
            const ll = new SLL();
            ll.fromValues(6, 9, 2, 5);
            ll.fromValues(0, 1, 4, 7, 3, 8);
            expect(ll.length).toBe(6);
            expect(ll.head?.value).toBe(0);
            expect(ll.head?.next?.value).toBe(1);
        });
    });
});