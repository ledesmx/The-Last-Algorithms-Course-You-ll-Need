type WeightedAdjacencyMatrix = number[][];

type QNode<T> = {
  value: T;
  next: QNode<T> | null;
};
class Queue<T> {
  private head: QNode<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }
  enqueue(value: T): void {
    const next = this.head;
    this.head = { value, next };
    this.length++;
  }
  deque(): T | null {
    if (!this.head) {
      return null;
    }
    const node = this.head;
    this.head = this.head?.next;
    this.length--;
    return node.value;
  }
  len(): number {
    return this.length;
  }
}

export function bfs(
  graph: WeightedAdjacencyMatrix,
  source: number,
  needle: number,
): number[] | null {
  if (graph.length <= 0) {
    return null;
  }

  const queue = new Queue<number>();
  const seen = new Array(graph.length).fill(false);
  const previousNode = new Array(graph.length).fill(-1);

  queue.enqueue(source);
  seen[source] = true;
  // previousNode[source] =
  while (queue.len() > 0) {
    const currentNode = queue.deque();
    if (currentNode === null) {
      return null;
    }
    if (currentNode === needle) {
      break;
    }
    for (let i = 0; i < graph[currentNode].length; ++i) {
      if (graph[currentNode][i] === 0) {
        continue;
      }
      if (seen[i] === true) {
        continue;
      }

      queue.enqueue(i);
      seen[i] = true;
      previousNode[i] = currentNode;
    }
  }

  if (seen[needle] === false) {
    return null;
  }

  const path = getPathFromNeedleToSource(previousNode, source, needle);
  reverseArray(path);
  return path;
}

function getPathFromNeedleToSource(
  previousNode: number[],
  source: number,
  needle: number,
): number[] {
  const path: number[] = [];
  let current = needle;
  for (let i = 0; i < previousNode.length; ++i) {
    path.push(current);
    if (current === source) {
      break;
    }
    current = previousNode[current];
  }
  return path;
}

function reverseArray<T>(array: T[]) {
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    const aux = array[low];
    array[low] = array[high];
    array[high] = aux;
    low++;
    high--;
  }
}
