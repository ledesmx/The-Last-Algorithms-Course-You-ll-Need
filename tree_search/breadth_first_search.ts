export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

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

export function bfs(head: BinaryNode<number>, niddle: number): boolean {
  const nodes = new Queue<BinaryNode<number>>();
  nodes.enqueue(head);

  while (nodes.len() > 0) {
    const node = nodes.deque();
    if (node?.value === niddle) {
      return true;
    }

    if (node && node.left) {
      nodes.enqueue(node.left);
    }
    if (node && node.right) {
      nodes.enqueue(node.right);
    }
  }

  return false;
}
