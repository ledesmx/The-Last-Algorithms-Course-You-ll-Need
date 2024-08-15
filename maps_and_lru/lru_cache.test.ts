import { describe, test, expect } from "bun:test";
import { LRU } from "./lru_cache.ts";
import type { SHA224 } from "bun";

describe("LRU cache", () => {
  test("Should return undefined for a non-existing key", () => {
    const cache = new LRU<string, number>(10);
    expect(cache.get("yes")).toBeUndefined();
  });
  test("Should store and retrieve a value", () => {
    const cache = new LRU<string, number>(10);
    cache.update("jon", 32);
    const got = cache.get("jon");
    const want = 32;
    expect(got).toBe(want);
  });
  test("Should update and existing key and retrieve it's value", () => {
    const cache = new LRU<string, number>(10);
    cache.update("jon", 32);
    cache.update("jon", 17);
    const got = cache.get("jon");
    const want = 17;
    expect(got).toBe(want);
  });
  test("Should evict the last recently used item", () => {
    const cache = new LRU<string, number>(3);
    cache.update("azul", 2);
    cache.update("reyna", 4);
    cache.update("juan", 27);
    cache.update("clara", 22);

    expect(cache.get("azul")).toBeUndefined();
    expect(cache.get("reyna")).toBe(4);
    expect(cache.get("juan")).toBe(27);
    expect(cache.get("clara")).toBe(22);
  });
  test("Should update the last recently used item, store a new item and evict the last one", () => {
    const cache = new LRU<string, number>(3);
    cache.update("azul", 2);
    cache.update("reyna", 4);
    cache.update("juan", 27);
    cache.update("azul", 3);
    cache.update("clara", 22);

    expect(cache.get("azul")).toBe(3);
    expect(cache.get("reyna")).toBeUndefined();
    expect(cache.get("juan")).toBe(27);
    expect(cache.get("clara")).toBe(22);
  });
});
