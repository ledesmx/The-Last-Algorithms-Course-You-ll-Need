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

