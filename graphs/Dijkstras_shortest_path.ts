type Connection = {
  to: number;
  weight: number;
};
export type WeightedAdjacencyList = Connection[][];

export function dijkstra_list(graph: WeightedAdjacencyList, source: number, sink: number): number[] | null {
  if (source >= graph.length, sink >= graph.length) {
    return null;
  }

  const previous = new Array(graph.length).fill(-1);
  const seen = new Array(graph.length).fill(false);
  const distance = new Array(graph.length).fill(Infinity);

  distance[source] = 0;

  while (hasUnvisitedNode(seen)) {
    const nearestNode = getNearestUnseenNode(seen, distance);
    if (nearestNode === -1) {

      break;
    }

    seen[nearestNode] = true; // mark node as seen
    if (nearestNode === sink) {
      break;
    }

    for (let i=0; i<graph[nearestNode].length; ++i) {
      const edge = graph[nearestNode][i];
      if (seen[edge.to] === true) {
        continue; // omit the node when it is already marked as seen
      }

      const edgeDistance = edge.weight + distance[nearestNode];
      if (edgeDistance < distance[edge.to]) {
        distance[edge.to] = edgeDistance;
        previous[edge.to] = nearestNode;
      }
    }
  }

  if (seen[sink] === false) {
    return null;
  }

  const path: number[] = getPath(previous, source, sink);

  return path;
}

function getNearestUnseenNode(seen: boolean[], distance: number[]): number {
  let lowest = -1;

  for (let i=0; i<seen.length; ++i) {
    if (!seen[i] && distance[i] !== Infinity) {
      lowest = i;
      break;
    }
  }
  if (lowest === -1) {
    return -1;
  }

  for (let i=0; i<seen.length; ++i) {
    if (!seen[i] && distance[i] < distance[lowest]) {
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

function getPath(previous: number[], source: number, sink: number): number[] {
  const path = getPathWalk(previous, source, sink, []);
  path.reverse();
  return path;
}
function getPathWalk(previous: number[], source: number, currentNode: number, path: number[]): number[] {
  path.push(currentNode);
  if (currentNode === source) {
    return path;
  }

  return getPathWalk(previous, source, previous[currentNode], path);
}
