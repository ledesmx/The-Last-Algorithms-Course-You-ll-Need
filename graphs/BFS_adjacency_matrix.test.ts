import { test, expect } from "bun:test";
import { bfs } from "./BFS_adjacency_matrix.ts";

test("Void graph", () => {
  const graph: number[][] = [];
  const source = 0;
  const needle = 1;
  const want = null;
  const got = bfs(graph, source, needle);
  expect(got).toBe(want);
});
test("To find path", () => {
  const graph: number[][] = [
    [0, 0, 10, 15],
    [0, 0, 20, 0],
    [9, 3, 0, 0],
    [0, 0, 5, 0],
  ];
  const source = 0;
  const needle = 1;
  const want = [0, 2, 1];
  const got = bfs(graph, source, needle);
  expect(got).toEqual(want);
});
test("To find path when the source is not the first node", () => {
  const graph: number[][] = [
    [0, 0, 10, 15],
    [0, 0, 20, 0],
    [9, 3, 0, 0],
    [0, 0, 5, 0],
  ];
  const source = 1;
  const needle = 3;
  const want = [1, 2, 0, 3];
  const got = bfs(graph, source, needle);
  expect(got).toEqual(want);
});
test("Don't find path", () => {
  const graph: number[][] = [
    [0, 3, 0, 0, 5],
    [0, 0, 0, 7, 0],
    [0, 4, 0, 0, 0],
    [0, 0, 3, 0, 0],
    [0, 2, 0, 0, 0],
  ];
  const source = 4;
  const needle = 0;
  const want = null;
  const got = bfs(graph, source, needle);
  expect(got).toBe(want);
});
