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
  pop(): number | null {
    if (this.length === 0) {
      return null;
    }
    const currentRoot = this.data[0];
    this.data[0] = this.data[this.length - 1];
    this.data.pop();
    this.length--;
    if (this.length === 0) {
      return currentRoot;
    }
    this.heapifyDown(0);
    return currentRoot;
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
  private heapifyDown(current: number) {
    const leftIndex = this.getLeftIndex(current);
    const rightIndex = this.getRightIndex(current);
    const leftValue = this.data[leftIndex];
    const rightValue = this.data[rightIndex];
    const currentValue = this.data[current];

    // No children
    if (leftValue === undefined) {
      return;
    }

    // Only one child (left)
    if (rightValue === undefined) {
      if (leftValue < currentValue) {
        this.swap(leftIndex, current);
      }
      return;
    }

    // Two children
    if (leftValue < rightValue && leftValue < currentValue) { // left < right
      this.swap(leftIndex, current);
      this.heapifyDown(leftIndex);
      return;
    }
    if (rightValue < leftValue && rightValue < currentValue) { // right < left
      this.swap(rightIndex, current);
      this.heapifyDown(rightIndex);
    }
  }
  private swap(i: number, j: number) {
    const aux = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = aux;
  }
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  private getLeftIndex(index: number): number {
    return (2 * index) + 1;
  }
  private getRightIndex(index: number): number {
    return (2 * index) + 2;
  }
}
