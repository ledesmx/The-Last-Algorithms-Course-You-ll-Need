export class Queue<T> {
    public head?: Node<T>;
    public tail?: Node<T>;
    public length: number;
    constructor() {
        this.length = 0;
    }
    enqueue(value: T) {
        const node: Node<T> = {
            value: value,
        };

        // If there is no nodes just point HEAD and TAIL to the new node
        if(!this.tail && !this.head) {
            this.tail = node;
            this.head = node;
            ++this.length;
            return;
        }

        // Otherwise add the node to the tail
        if(this.tail) {
            this.tail.next = node;
        }
        this.tail = node;
        ++this.length;
    }
    deque(): T | null {
        // If there is nodes then deque
        if(this.head) {
            const value = this.head.value;
            this.head = this.head.next;
            --this.length;
            return value;
        }
        
        // Otherwise return null
        return null;
    }
}
type Node<T> = {
    value: T,
    next?: Node<T>,
}
