type Connection = {
  to: number;
  weight: number;
};
export type WeightedAdjacencyList = Connection[][];

export function dijkstra_list(graph: WeightedAdjacencyList, source: number, sink: number): number[] | null {
  return [];
}
