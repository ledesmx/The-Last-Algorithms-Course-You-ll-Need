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

describe("#pop", () => {
  test("Pop when there is no nodes", () => {
    const s = new Stack<boolean>();

    expect(s.pop()).toBeUndefined();
    expect(s.length).toBe(0);
  });
  test("Push and pop 3 times", () => {
    const s = new Stack<string>();

    s.push("101");
    s.push("Yes");
    s.push("No");
    s.push("900");
    expect(s.pop()).toBe("900");
    expect(s.length).toBe(3);

    s.push("333");
    s.push("HELLO");
    expect(s.pop()).toBe("HELLO");
    expect(s.length).toBe(4);

    s.push("1234");
    expect(s.pop()).toBe("1234");
    expect(s.length).toBe(4);
  });
});

describe("#push #pop and #push", () => {
  test("Fill, empty and fill again the stack", () => {
    const s = new Stack<number>();

    s.push(5);
    s.push(10);
    s.push(15);

    expect(s.length).toBe(3);
    expect(s.peek()).toBe(15);

    expect(s.pop()).toBe(15);
    expect(s.pop()).toBe(10);
    expect(s.pop()).toBe(5);

    expect(s.length).toBe(0);
    expect(s.peek()).toBeUndefined();

    s.push(20);
    s.push(25);

    expect(s.length).toBe(2);
    expect(s.peek()).toBe(25);
  });
});
