import { test, expect } from "bun:test";
import { dfs } from "./DFS_adjacency_list.ts";
import type { WeightedAdjacencyList } from "./DFS_adjacency_list.ts";

test("Void graph", () => {
  const graph: WeightedAdjacencyList = [];
  const source = 0;
  const needle = 1;
  const want = null;
  const got = dfs(graph, source, needle);
  expect(got).toBe(want);
});
test("To find path", () => {
  const graph: WeightedAdjacencyList = [
    [{ to: 2, weight: 10 }, { to: 3, weight: 15 }],
    [{ to: 2, weight: 20 }],
    [{ to: 0, weight: 9 }, { to: 1, weight: 3 }],
    [{ to: 2, weight: 5 }]
  ];
  const source = 0;
  const needle = 1;
  const want = [0, 2, 1];
  const got = dfs(graph, source, needle);
  expect(got).toEqual(want);
});
test("To find path when the source is not the first node", () => {
  const graph: WeightedAdjacencyList = [
    [{ to: 2, weight: 10 }, { to: 3, weight: 15 }],
    [{ to: 2, weight: 20 }],
    [{ to: 0, weight: 9 }, { to: 1, weight: 3 }],
    [{ to: 2, weight: 5 }]
  ];
  const source = 1;
  const needle = 3;
  const want = [1, 2, 0, 3];
  const got = dfs(graph, source, needle);
  expect(got).toEqual(want);
});
test("Two possible paths and the last path is the correct one", () => {
  const graph: WeightedAdjacencyList = [
    [{ to: 2, weight: 5 }, { to: 3, weight: 5 }],
    [],
    [{ to: 1, weight: 9 }, { to: 0, weight: 7 }],
    [{ to: 0, weight: 4 }, { to: 4, weight: 7 }],
    []
  ];
  const source = 0;
  const needle = 4;
  const want = [0, 3, 4];
  const got = dfs(graph, source, needle);
  expect(got).toEqual(want);
});
test("Don't find path", () => {
  const graph: WeightedAdjacencyList = [
    [{ to: 1, weight: 3 }, { to: 4, weight: 5 }],
    [{ to: 3, weight: 7 }],
    [{ to: 1, weight: 4 }],
    [{ to: 2, weight: 3 }],
    [{ to: 1, weight: 2 }]
  ];
  const source = 4;
  const needle = 0;
  const want = null;
  const got = dfs(graph, source, needle);
  expect(got).toBe(want);
});
