type WeightedAdjacencyMatrix = number[][];

type QNode<T> = {
  value: T;
  next: QNode<T> | null;
}
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

export function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
  return [];
}
