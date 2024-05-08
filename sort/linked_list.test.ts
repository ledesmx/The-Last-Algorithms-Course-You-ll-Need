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
    describe("#getByIndex", () => {
        test("The index is negative", () => {
            const ll = new SLL();
            expect(ll.getByIndex(-3)).toBeNull();
        });
        test("The index is 0", () => {
            const ll = new SLL();
            ll.fromValues(4, 7, 9, 1);
            expect(ll.getByIndex(0)?.value).toBe(4);
        });
        test("The index is in the middle of the list", () => {
            const ll = new SLL();
            ll.fromValues(4, 7, 2, 6, 8, 9);
            expect(ll.getByIndex(3)?.value).toBe(6);
        });
        test("The index is greater thant the length", () => {
            const ll = new SLL();
            ll.fromValues(3, 5, 7, 8, 9);
            expect(ll.getByIndex(10)).toBeNull();
        });
    });
    describe("#insertAtIndex", () => {
        test("The index is negative", () => {
            const ll = new SLL();
            ll.fromValues(2, 5, 6, 8);
            ll.insertAtIndex(5, -3);
            expect(ll.head?.value).toBe(2);
            expect(ll.length).toBe(4);
        });
        test("The index is 0", () => {
            const ll = new SLL();
            ll.fromValues(5, 7, 8, 3);
            ll.insertAtIndex(6, 0);
            expect(ll.head?.value).toBe(6);
            expect(ll.length).toBe(5);
            ll.insertAtIndex(3, 0);
            expect(ll.head?.value).toBe(3);
            expect(ll.length).toBe(6);

            const ll2 = new SLL();
            ll2.insertAtIndex(7, 0);
            ll2.insertAtIndex(9, 0);
            expect(ll2.head?.value).toBe(9);
            expect(ll2.length).toBe(2);
        });
        test("The incex is in the middle of the list", () => {
            const ll = new SLL();
            ll.fromValues(5, 7, 8, 0);
            ll.insertAtIndex(2, 2);
            expect(ll.head?.value).toBe(5);
            expect(ll.length).toBe(5);

            ll.insertAtIndex(1, 1);
            expect(ll.head?.value).toBe(5);
            expect(ll.length).toBe(6);
        });
        test("The index is greater than the length", () => {
            const ll = new SLL();
            ll.fromValues(2, 6, 9, 2);
            ll.insertAtIndex(1, 4);
            ll.insertAtIndex(1, 9);
            expect(ll.length).toBe(4);
        });
    });
    describe("#removeAtHead", () => {
        test("The list has NO values", () => {
            const ll = new SLL();
            ll.removeAtHead();
            expect(ll.head).toBeNull();
            expect(ll.length).toBe(0);
        });
        test("The list has only one value", () => {
            const ll = new SLL();
            ll.fromValues(6);
            ll.removeAtHead();
            expect(ll.head).toBeNull();
            expect(ll.length).toBe(0);
        });
        test("The list has many values", () => {
            const ll = new SLL();
            ll.fromValues(4, 6, 8, 9, 0);
            ll.removeAtHead();
            expect(ll.head?.value).toBe(6);
            expect(ll.length).toBe(4);

            ll.removeAtHead();
            expect(ll.head?.value).toBe(8);
            expect(ll.length).toBe(3);
        });
    });
    describe("removeAtIndex", () => {
        test("The index is lower than 0", () => {
            const ll = new SLL();
            ll.fromValues(4, 6);

            ll.removeAtIndex(-3);
            expect(ll.head?.value).toBe(4);
            expect(ll.length).toBe(2);
        });
        test("The index is 0", () => {
            const ll = new SLL();
            ll.fromValues(3, 7, 9, 7);

            ll.removeAtIndex(0);
            expect(ll.head?.value).toBe(7);
            expect(ll.length).toBe(3);

            ll.removeAtIndex(0);
            expect(ll.head?.value).toBe(9);
            expect(ll.length).toBe(2);
        });
        test("The index is in the middle of the list", () => {
            const ll = new SLL();
            ll.fromValues(6, 8, 9, 2);

            ll.removeAtIndex(2);
            expect(ll.head?.value).toBe(6);
            expect(ll.length).toBe(3);
        });
        test("The index is greater than the list", () => {
            const ll = new SLL();
            ll.fromValues(5, 7, 8, 9);

            ll.removeAtIndex(10);
            expect(ll.length).toBe(4)

            ll.removeAtIndex(4);
            expect(ll.length).toBe(4);
        });
        test("The list has no values", () => {
            const ll = new SLL();
            
            ll.removeAtIndex(0);
            expect(ll.head).toBeNull();
            expect(ll.length).toBe(0);
        });
    });
});