export type BinaryNode<T> = {
  value: T;
  left: BinaryNode<T> | null;
  right: BinaryNode<T> | null;
};

function pre_order_walk<T>(current: BinaryNode<T> | null, nodes: T[]) {
  if (!current) {
    return;
  }

  nodes.push(current.value);
  pre_order_walk(current.left, nodes);
  pre_order_walk(current.right, nodes);
}

export function pre_order_search<T>(head: BinaryNode<T>): T[] {
  const nodes: T[] = [];
  pre_order_walk(head, nodes);
  return nodes;
}
