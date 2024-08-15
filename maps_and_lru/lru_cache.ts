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
