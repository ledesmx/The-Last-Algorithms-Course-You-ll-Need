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
  test("Push more elements than the capacity", () => {
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
    const ab = new ArrayBuffer<string>(4);
    expect(ab.pop()).toBeUndefined();
    expect(ab.getTail()).toBeUndefined();
    expect(ab.getHead()).toBeUndefined();
    expect(ab.getLen()).toBe(0);
    expect(ab.getCap()).toBe(4);
  });
  test("Pop When there are values", () => {
    const ab = new ArrayBuffer<string>(5);
    ab.push("yes");
    ab.push("noo");
    ab.push("you");
    ab.push("aja");
    ab.push("hey");
    expect(ab.pop()).toBe("hey");
    expect(ab.pop()).toBe("aja");
    expect(ab.pop()).toBe("you");
    expect(ab.getTail()).toBe("yes");
    expect(ab.getHead()).toBe("noo");
    expect(ab.getLen()).toBe(2);
    expect(ab.getCap()).toBe(5);
  });
  test("Pop when the head reaches the tail", () => {
    const ab = new ArrayBuffer<string>(3);
    ab.push("111");
    ab.push("222");
    ab.push("333");
    ab.push("444");
    expect(ab.pop()).toBe("444");
    expect(ab.pop()).toBe("333");
    expect(ab.pop()).toBe("222");
    expect(ab.pop()).toBeUndefined();
    expect(ab.getTail()).toBeUndefined();
    expect(ab.getHead()).toBeUndefined();
    expect(ab.getLen()).toBe(0);
    expect(ab.getCap()).toBe(3);
  });
});

describe("#shift", () => {
  test("Shift when there are no values yet", () => {
    const ab = new ArrayBuffer<number>(4);
    expect(ab.shift()).toBeUndefined();
    expect(ab.getTail()).toBeUndefined();
    expect(ab.getHead()).toBeUndefined();
    expect(ab.getLen()).toBe(0);
    expect(ab.getCap()).toBe(4);
  });
  test("Shift when there are values", () => {
    const ab = new ArrayBuffer<number>(5);
    ab.push(0);
    ab.push(10);
    ab.push(20);
    ab.push(30);
    ab.push(40);
    expect(ab.shift()).toBe(0);
    expect(ab.shift()).toBe(10);
    expect(ab.shift()).toBe(20);
    expect(ab.getTail()).toBe(30);
    expect(ab.getHead()).toBe(40);
    expect(ab.getLen()).toBe(2);
    expect(ab.getCap()).toBe(5);
  });
  test("Shift when the tail reaches the head", () => {
    const ab = new ArrayBuffer<number>(3);
    ab.push(111);
    ab.push(222);
    ab.push(333);
    ab.push(444);
    expect(ab.shift()).toBe(222);
    expect(ab.shift()).toBe(333);
    expect(ab.shift()).toBe(444);
    expect(ab.shift()).toBeUndefined();
    expect(ab.getTail()).toBeUndefined();
    expect(ab.getHead()).toBeUndefined();
    expect(ab.getLen()).toBe(0);
    expect(ab.getCap()).toBe(3);
  });
});

describe("#unshift", () => {
  test("Unshift a element", () => {
    const ab = new ArrayBuffer<number>(4);
    ab.unshift(2);
    expect(ab.getTail()).toBe(2);
    expect(ab.getHead()).toBe(2);
    expect(ab.getLen()).toBe(1);
    expect(ab.getCap()).toBe(4);
  });
  test("Unshift the same number of elements than the capacity", () => {
    const ab = new ArrayBuffer<number>(3);
    ab.unshift(0);
    ab.unshift(10);
    ab.unshift(20);
    expect(ab.getTail()).toBe(20);
    expect(ab.getHead()).toBe(0);
    expect(ab.getLen()).toBe(3);
    expect(ab.getCap()).toBe(3);
  });
  test("Unshift more elements than the capacity", () => {
    const ab = new ArrayBuffer<number>(3);
    ab.unshift(11);
    ab.unshift(22);
    ab.unshift(33);
    ab.unshift(44);
    expect(ab.getTail()).toBe(44);
    expect(ab.getHead()).toBe(22);
    expect(ab.getLen()).toBe(3);
    expect(ab.getCap()).toBe(3);
  });
});
