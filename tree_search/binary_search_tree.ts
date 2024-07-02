export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
}

export class BST {
  root: BinaryNode<number> | null;
  constructor(root: BinaryNode<number> | null = null) {
    this.root = root;
  }
  find(value: number): boolean {
    return this.find_walk(this.root, value);
  }
  private find_walk(current: BinaryNode<number> | null, value: number): boolean {
    if (!current) {
      return false;
    }
    if (current.value === value) {
      return true;
    }

    if (value < current.value) {
      return this.find_walk(current.left, value);
    }
    return this.find_walk(current.right, value);
  }
  insert(...values: number[]): void {
    let i = 0;
    if (!this.root) {
      this.root = this.new_node(values[0]);
      i++;
    }
    for (; i < values.length; ++i) {
      this.insert_walk(this.root, values[i]);
    }
  }
  private insert_walk(current: BinaryNode<number> | null, value: number): void {
    if (!current) { // This should not happen
      return;
    }

    // Base cases
    if (value <= current.value) {
      if (!current.left) {
        current.left = this.new_node(value);
        return;
      }
    } else {
      if (!current.right) {
        current.right = this.new_node(value);
        return;
      }
    }

    // Resursion
    if (value <= current.value) {
      this.insert_walk(current.left, value);
      return;
    }
    this.insert_walk(current.right, value);
  }
  private new_node(value: number): BinaryNode<number> {
    const left = null;
    const right = null;
    return { value, left, right };
  }
}
