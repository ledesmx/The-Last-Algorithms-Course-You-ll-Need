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
  delete(value: number): void {
    if (this.root?.value === value) {
      this.delete_root();
      return;
    }
    const parent = this.find_parent(value, this.root || { value: 0, left: null, right: null });
    if (parent === null) {
      // If there is no parent then the value was not finded in the tree
      return;
    }
    if (parent.left?.value === value) {
      this.delete_child_on_side(parent, parent.left, "left");
      return;
    }
    if (parent.right?.value === value) {
      this.delete_child_on_side(parent, parent.right, "right");
      return;
    }
  }
  private delete_child_on_side(parent: BinaryNode<number>, node: BinaryNode<number>, side: "left" | "right"): void {
    if (node.left === null && node.right === null) {
      parent[side] = null;
      return;
    }
    if (node.left === null || node.right === null) {
      if (node.left !== null) {
        parent[side] = node.left;
        return;
      }
      parent[side] = node.right;
      return;
    }

    const largest_on_left = this.find_largest(node.left);
    const parent_of_largest = this.find_parent_of_largest(node.left);
    if (parent_of_largest === null) {
      largest_on_left.right = node.right;
      parent[side] = largest_on_left;
      return;
    }

    parent_of_largest.right = largest_on_left.left;
    node.value = largest_on_left.value;
  }
  private find_largest(node: BinaryNode<number>): BinaryNode<number> {
    if (node.right === null) {
      return node;
    }
    return this.find_largest(node.right);
  }
  private find_parent_of_largest(node: BinaryNode<number>): BinaryNode<number> | null {
    if (node.right === null) {
      return null;
    }
    if (node.right.right === null) {
      return node;
    }
    return this.find_parent_of_largest(node.right);
  }
  private find_parent(value: number, current: BinaryNode<number>): BinaryNode<number> | null {
    if (value <= current.value) {
      if (current.left === null) {
        return null;
      }
      if (current.left.value === value) {
        return current;
      }
      return this.find_parent(value, current.left);
    }
    if (value > current.value) {
      if (current.right === null) {
        return null;
      }
      if (current.right.value === value) {
        return current;
      }
      return this.find_parent(value, current.right);
    }
    return null;
  }
  private delete_root() {
    if (this.root === null) {
      return;
    }
    if (this.root.left === null && this.root.right === null) {
      this.root = null;
      return;
    }
    if (this.root.left === null || this.root.right === null) {
      if (this.root.left !== null) {
        this.root = this.root.left;
      } else {
        this.root = this.root.right;
      }
      return;
    }
    const largest_on_left = this.find_largest(this.root.left);
    const parent_of_largest = this.find_parent_of_largest(this.root.left);
    if (parent_of_largest === null) {
      // The left node is the largest on the left side
      largest_on_left.right = this.root.right;
      this.root = largest_on_left;
      return;
    }
    parent_of_largest.right = largest_on_left.left;
    this.root.value = largest_on_left.value;
  }
}
