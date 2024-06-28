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

function in_order_walk<T>(current: BinaryNode<T> | null, nodes: T[]) {
  if (!current) {
    return;
  }

  in_order_walk(current.left, nodes);
  nodes.push(current.value);
  in_order_walk(current.right, nodes);
}

export function in_order_search<T>(head: BinaryNode<T>): T[] {
  const nodes: T[] = [];
  in_order_walk(head, nodes);
  return nodes;
}

function post_order_walk<T>(current: BinaryNode<T> | null, nodes: T[]) {
  if (!current) {
    return;
  }

  post_order_walk(current.left, nodes);
  post_order_walk(current.right, nodes);
  nodes.push(current.value);
}

export function post_order_search<T>(head: BinaryNode<T>): T[] {
  const nodes: T[] = [];
  post_order_walk(head, nodes);
  return nodes;
}
