export class ArrayBuffer<T> {
    private array: (T | undefined)[];
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
        // Wheter this is the first push or there is not push at the current tail,
        // DO NOT increment tail
        // otherwise increment tail
        if(this.head === this.tail && this.array[this.tail] !== undefined) {
            this.tail = (this.tail + 1) % this.capacity;
        }
        this.array[this.head] = value;
        this.head = (this.head + 1) % this.capacity;
        this.length = Math.min(this.length + 1, this.capacity);
    }
    pop(): T | undefined {
        const value = this.array[this.tail];
        if(value === undefined) {
            return value;
        }
        this.array[this.tail] = undefined;
        this.tail = (this.tail + 1) % this.capacity;
        this.length--;
        return value;
    }
}
