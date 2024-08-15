export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function walk(
  a: BinaryNode<number> | null,
  b: BinaryNode<number> | null,
): boolean {
  if (a === null && b === null) {
    return true;
  }
  if (a === null || b === null) {
    return false;
  }
  if (a.value !== b.value) {
    return false;
  }

  return walk(a.left, b.left) && walk(a.right, b.right);
}

export function compare(a: BinaryNode<number>, b: BinaryNode<number>): boolean {
  return walk(a, b);
}
