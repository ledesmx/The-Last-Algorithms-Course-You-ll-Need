type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Stack<T> {
  private head?: Node<T>;
  public length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }
  push(value: T): void {
    const node: Node<T> = {
      value: value,
      next: this.head,
    };
    this.head = node;
    this.length++;
  }
  pop(): T | undefined {
    if (!this.head) {
      return this.head;
    }
    const currentHead = this.head;
    this.head = this.head?.next;
    this.length--;
    return currentHead?.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
