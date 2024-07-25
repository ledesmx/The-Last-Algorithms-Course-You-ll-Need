type Connection = {
  to: number;
  weight: number;
};
export type WeightedAdjacencyList = Connection[][];
  

export function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {
  if (graph.length === 0) {
    return null;
  }
  const seen = new Array(graph.length).fill(false);
  const path = dfs_walk(graph, source, needle, seen, []);

  return path;
}
function dfs_walk(graph: WeightedAdjacencyList, current: number, needle: number, seen: boolean[], path: number[]): number[] | null {
  if (seen[current]) {
    return null;
  }
  if (current === needle) {
    path.push(current);
    return path;
  }

  path.push(current);
  seen[current] = true;

  for (let i=0; i < graph[current].length; ++i) {
    const result = dfs_walk(graph, graph[current][i].to, needle, seen, path);
    if (result !== null) {
      return result;
    }
  }
  const p = path.pop();
  return null;
}
