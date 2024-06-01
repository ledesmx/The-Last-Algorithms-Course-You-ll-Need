export class ArrayBuffer<T> {
    private array: T[];
    private capacity: number;
    private length: number;
    private head: number;
    private tail: number;
    constructor(size: number) {
        this.capacity = size;
        this.length = 0;
        this.array = [];
        this.head = this.tail = 0;
    }
    getCap(): number {
        return this.capacity;
    }
    getLen(): number {
        return this.length;
    }
    getHead(): T | undefined {
        const index = this.head === 0 ? this.capacity - 1 : this.head - 1;
        return this.array[index];
    }
    getTail(): T | undefined {
        return this.array[this.tail];
    }
    push(value: T): void {
        // If this is not the first push and the head and tail are the same,
        // the increment tail
        if(this.head === this.tail && this.array[this.tail] !== undefined) {
            this.tail = (this.tail + 1) % this.capacity;
        }
        this.array[this.head] = value;
        this.head = (this.head + 1) % this.capacity;
        this.length = Math.min(this.length + 1, this.capacity);
    }
}
