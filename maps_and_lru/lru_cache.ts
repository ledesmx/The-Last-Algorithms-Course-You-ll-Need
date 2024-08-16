import type { NullLiteral } from "typescript";

export class LRU<K, V> {
  private length: number;
  private size: number;

  constructor(size: number) {
    this.length = 0;
    this.size = size;
  }

  update(key: K, value: V): void {}
  get(key: K): V | undefined {
    return undefined;
  }
}

type Node<T> = {
  value: number;
  next: Node<T> | null;
  prev: Node<T> | null;
};
class DLL<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insertAtHead(value: number): void {
    if (this.head === null) {
      this.tail = this.head = { value, next: null, prev: null };
      return;
    }
    const node = { value, next: this.head, prev: null };
    this.head.prev = node;
    this.head = node;
    this.length++;
  }
  removeAtTail(): void {
    if (this.tail === null) {
      return;
    }

    const previous = this.tail.prev;
    if (previous === null) {
      this.tail = null;
      this.length--;
      return;
    }

    this.tail.prev = null;
    previous.next = null;
    this.tail = previous;
    this.length++;
  }
  moveToHead(node: Node<T>): void {
    const { prev, next } = node;
    if (prev === null || this.head === null) {
      return;
    }
    if (next === null) {
      prev.next = null;
    } else {
      prev.next = next;
      next.prev = prev;
    }

    this.head.prev = node;
    node.next = this.head;
    node.prev = null;
    this.head = node;
  }
  len(): number {
    return this.length;
  }
}
