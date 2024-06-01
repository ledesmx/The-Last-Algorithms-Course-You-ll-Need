import { describe, test, expect } from "bun:test";
import { ArrayBuffer } from "./array_buffer.ts";

describe("#push", () => {
    test("Push a element", () => {
        const ab = new ArrayBuffer<number>(4);
        ab.push(2);
        expect(ab.getTail()).toBe(2);
        expect(ab.getHead()).toBe(2);
        expect(ab.getLen()).toBe(1);
        expect(ab.getCap()).toBe(4);
    });
    test("Push the same number of elements than the capacity", () => {
        const ab = new ArrayBuffer<number>(3);
        ab.push(0);
        ab.push(10);
        ab.push(20);
        expect(ab.getTail()).toBe(0);
        expect(ab.getHead()).toBe(20);
        expect(ab.getLen()).toBe(3);
        expect(ab.getCap()).toBe(3);
    });
    test("Push the more elements than the capacity", () => {
        const ab = new ArrayBuffer<number>(3);
        ab.push(111);
        ab.push(222);
        ab.push(333);
        ab.push(444);
        expect(ab.getTail()).toBe(222);
        expect(ab.getHead()).toBe(444);
        expect(ab.getLen()).toBe(3);
        expect(ab.getCap()).toBe(3);
    });
});

describe("#pop", () => {
    test("Pop when there are no values yet", () => {
        const ab = new ArrayBuffer<number>(4);
        expect(ab.pop()).toBeUndefined();
        expect(ab.getTail()).toBeUndefined();
        expect(ab.getHead()).toBeUndefined();
        expect(ab.getLen()).toBe(0);
        expect(ab.getCap()).toBe(4);
    });
    test("Pop when there are values", () => {
        const ab = new ArrayBuffer<number>(5);
        ab.push(0);
        ab.push(10);
        ab.push(20);
        ab.push(30);
        ab.push(40);
        expect(ab.pop()).toBe(0);
        expect(ab.pop()).toBe(10);
        expect(ab.pop()).toBe(20);
        expect(ab.getTail()).toBe(30);
        expect(ab.getHead()).toBe(40);
        expect(ab.getLen()).toBe(2);
        expect(ab.getCap()).toBe(5);
    });
    test("Pop when the tail reaches the head", () => {
        const ab = new ArrayBuffer<number>(3);
        ab.push(111);
        ab.push(222);
        ab.push(333);
        ab.push(444);
        expect(ab.pop()).toBe(222);
        expect(ab.pop()).toBe(333);
        expect(ab.pop()).toBe(444);
        expect(ab.pop()).toBeUndefined();
        expect(ab.getTail()).toBeUndefined();
        expect(ab.getHead()).toBeUndefined();
        expect(ab.getLen()).toBe(0);
        expect(ab.getCap()).toBe(3);
    });
});
