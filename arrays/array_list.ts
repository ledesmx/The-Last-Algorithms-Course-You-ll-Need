export class ArrayList<T> {
    public length: number;
    public capacity: number;
    private array: T[];
    constructor(cap: number = 0) {
        this.length = 0;
        this.capacity = cap;
        this.array = [];
    }
    fromValues(...values: T[]) {
        if(values.length > this.capacity) {
            throw new Error("array capacity exceeded");
        }
        for(let i = 0; i < values.length; ++i) {
            this.array[i] = values[i]; 
        }
        this.length = values.length;
    }
    getByIndex(index: number): T | undefined {
        if(index >= this.length || index < 0) {
            return undefined;
        }
        return this.array[index];
    }
    setAtIndex(value: T, index: number): void {
        if(index < 0) {
            throw new Error("array list index is negative");
        }
        if(index >= this.length) {
            throw new Error("array list index out of length");
        }
        this.array[index] = value;
    }
    // push(value: T): void {

    // }
    // pop(): T {

    // }
}