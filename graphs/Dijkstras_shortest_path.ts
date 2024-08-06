type Connection = {
  to: number;
  weight: number;
};
export type WeightedAdjacencyList = Connection[][];

export function dijkstra_list(graph: WeightedAdjacencyList, source: number, sink: number): number[] | null {
  return [];
}

function getLowestUnseenNode(seen: boolean[], dist: number[]): number {
  let lowest = -1;

  for (let i=0; i<seen.length; ++i) {
    if (!seen[i] && dist[i] < dist[lowest]) {
      lowest = i;
    }
  }
  
  return lowest;
}

function hasUnvisitedNode(seen: boolean[]): boolean {
  for (let i=0; i<seen.length; ++i) {
    if (!seen[i]) {
      return true;
    }
  }
  return false;
}
