type Node<T> = {
  value: T;
  next: Node<T> | null;
  prev: Node<T> | null;
};
type Pair<K, V> = {
  key: K;
  value: V;
};
type NodePair<K, V> = Node<Pair<K, V>>;

export class LRU<K, V> {
  private size: number;
  private LL: DLL<Pair<K, V>>;
  private map: Map<K, NodePair<K, V>>;

  constructor(size: number) {
    this.size = size;
    this.LL = new DLL<Pair<K, V>>();
    this.map = new Map<K, NodePair<K, V>>();
  }

  update(key: K, value: V): void {
    const node = this.map.get(key);

    if (node === undefined) {
      const newNode = this.LL.insertAtHead({ key, value });
      // if (newNode === null) {
      //   console.error("null node | null head");
      //   return;
      // }
      this.map.set(key, newNode);

      if (this.LL.len() > this.size) {
        const last_recently_use = this.LL.removeAtTail();
        if (last_recently_use === null) {
          console.error(
            "last recently used / tail = null. Cannot delete from map",
          );
          return;
        }
        const key = last_recently_use.value.key;
        this.map.delete(key);
      }
      return;
    }

    node.value.value = value;
    this.LL.moveToHead(node);
  }
  get(key: K): V | undefined {
    const node = this.map.get(key);
    if (node === undefined) {
      return undefined;
    }

    this.LL.moveToHead(node);
    return node.value.value;
  }
}

class DLL<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  insertAtHead(value: T): Node<T> {
    if (this.head === null) {
      this.tail = this.head = { value, next: null, prev: null };
      this.length++;
      return this.head;
    }
    const node = { value, next: this.head, prev: null };
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this.head;
  }
  removeAtTail(): Node<T> | null {
    if (this.tail === null) {
      return null;
    }

    const tail = this.tail;
    const previous = this.tail.prev;
    if (previous === null) {
      this.tail = null;
      this.length--;
      return tail;
    }

    this.tail.prev = null;
    previous.next = null;
    this.tail = previous;
    this.length++;
    return tail;
  }
  moveToHead(node: Node<T>): void {
    const { prev, next } = node;
    if (prev === null || this.head === null) {
      return;
    }
    if (next === null) {
      prev.next = null;
      this.tail = prev;
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
