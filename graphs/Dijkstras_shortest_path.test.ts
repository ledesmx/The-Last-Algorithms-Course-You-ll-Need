import { test, expect } from "bun:test";
import { dijkstra_list } from "./Dijkstras_shortest_path.ts";
import type { WeightedAdjacencyList } from "./Dijkstras_shortest_path.ts";

test("When there is only one valid path to the sink", () => {
  const graph: WeightedAdjacencyList = [
    [{to: 1, weight: 3}, {to: 4, weight: 1}],
    [{to: 2, weight: 5}, {to: 3, weight: 2}],
    [],
    [],
    [{to: 5, weight: 2}, {to: 6, weight: 3}],
    [{to: 7, weight: 1}],
    [],
    []
  ];
  const source = 0;
  const sink = 7;
  const want = [0, 4, 5, 7];
  const got = dijkstra_list(graph, source, sink);
  expect(got).toEqual(want);
});
test("When the source is next to the sink, but the shortest path has other nodes", () => {
  const graph: WeightedAdjacencyList = [
    [],
    [{to: 0, weight: 9}, {to: 3, weight: 1}],
    [{to: 0, weight: 3}],
    [{to: 4, weight: 2}],
    [{to: 2, weight: 1}]
  ];
  const source = 1;
  const sink = 0;
  const want = [1, 3, 4, 2, 0];
  const got = dijkstra_list(graph, source, sink);
  expect(got).toEqual(want);
});
test("When there are multiple path to the sink, bun only one of them is the shotest", () => {
  const graph: WeightedAdjacencyList = [
    [{to: 1, weight: 3}, {to: 4, weight: 5}],
    [{to: 2, weight: 7}, {to: 5, weight: 7}, {to: 3, weight: 8}],
    [{to: 7, weight: 2}, {to: 5, weight: 2}],
    [{to: 0, weight: 2}, {to: 5, weight: 1}],
    [{to: 3, weight: 1}, {to: 6, weight: 1}],
    [{to: 7, weight: 4}, {to: 2, weight: 1}],
    [{to: 7, weight: 5}],
    [{to: 3, weight: 5}]
  ];
  const source = 0;
  const sink = 7;
  const want = [0, 4, 3, 5, 2, 7];
  const got = dijkstra_list(graph, source, sink);
  expect(got).toEqual(want);
});
