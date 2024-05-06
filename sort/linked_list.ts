// Singly Linked List
export class SLL {
    head: SNode | null;
    length: number;
    constructor(element: number | null = null) {
        this.head = element ? new SNode(element, null) : null;
        this.length = element ? 1 : 0;
    }
    insertAtHead(value: number) {
        const node = new SNode(value, this.head);
        this.head = node;
        ++this.length;
    }
    fromValues(...values: number[]) {
        this.head = null;
        this.length = 0;
        for(let i = values.length; i > 0; --i) {
            const next: SNode | null = this.head;
            const node: SNode = new SNode(values[i - 1], next);
            this.head = node;
            ++this.length;
        }
    }
    getByIndex(index: number): number | null {
        if( index < 0 || index >= this.length ) {
            return null;
        }
        let currentNode: SNode | null | undefined = this.head;
        for(let i = 0; i < index; ++i) {
            currentNode = currentNode?.next;
        }
        const value = currentNode?.value;
        return value ? value : null;
    }
    
}
// Single Node
class SNode {
    value: number;
    next: SNode | null;
    constructor(value: number, currentHead: SNode | null) {
        this.value = value;
        this.next = currentHead;
    }
}

// Doubly Linked List
export class DLL {

}

