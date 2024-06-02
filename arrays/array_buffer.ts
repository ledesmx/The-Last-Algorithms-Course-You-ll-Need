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
        const index = this.head === 0 ? this.capacity - 1 : this.head - 1;
        const value =  this.array[index];
        if(value) {
            this.array[index] = undefined;
            this.head = index;
            this.length--;
        }
        return value;
    }
    shift(): T | undefined {
        const value = this.array[this.tail];
        if(value === undefined) {
            return value;
        }
        this.array[this.tail] = undefined;
        this.tail = (this.tail + 1) % this.capacity;
        this.length--;
        return value;
    }
    unshift(value: T): void  {
        if(this.tail === this.head && this.array[this.tail] === undefined) {
            this.push(value);
            return;
        }
        const index = this.tail === 0 ? this.capacity - 1 : this.tail - 1;
        if(this.head === this.tail) {
            this.head = index;
        }
        this.tail = index;
        this.array[this.tail] = value;
        this.length = Math.min(this.length + 1, this.capacity);
    }
}
