export class MinHeap {
  length: number;
  private data: number[];
  constructor(data: number[] = []) {
    this.length = data.length;
    this.data = data;
  }
  getData(): number[] {
    const [...data] = this.data;
    return data;
  }
  insert(value: number): void {
    this.data[this.length] = value;
    this.length++;
    this.heapifyUp(this.length - 1)
  }
  private heapifyUp(current: number) {
    const parentIndex = this.getParentIndex(current);
    if (parentIndex < 0) {
      return;
    }
    if (this.data[current] >= this.data[parentIndex]) {
      return;
    }

    this.swap(current, parentIndex);
    this.heapifyUp(parentIndex);
  }
  private swap(i: number, j: number) {
    const aux = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = aux;
  }
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  pop(): number | null {
    return null;
  }
}
