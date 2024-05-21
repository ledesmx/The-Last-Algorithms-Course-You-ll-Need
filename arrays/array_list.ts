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
    getByIndex(index: number): T | undefined | null{
        if(index >= this.length) {
            return undefined;
        }
        if(!this.array[index]) {
            return null;
        }
        return this.array[index];
    }
    // setByIndex(value: T, index: number): void {

    // }
    // push(value: T): void {

    // }
    // pop(): T {

    // }
}