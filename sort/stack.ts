type Node<T> = {
    value: T,
    next?: Node<T>
}

export class Stack<T> {
    private head?: Node<T>;
    public length: number;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }
    push(value: T) {
        const node: Node<T> = {
            value: value,
            next: this.head,
        };
        this.head = node;
        this.length++;
    }
    // pop(): T {

    // }
    // peek(): T {

    // }
}
