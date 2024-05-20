export class ArrayList<T> {
    public length: number;
    public capacity: number;
    private array: T[];
    constructor(len: number = 0, cap: number = len) {
        this.length = len;
        this.capacity = cap;
        this.array = [];
    }
    fromValues(...values: T[]) {
        if(values.length >= this.length) {
            return;
        }
        for(let i = 0; i < values.length; ++i) {
            this.array[i] = values[i]; 
        }
    }
    // setByIndex(value: T, index: number): void {

    // }
    // getByIndex(index: number): T {
        
    // }
    // push(value: T): void {

    // }
    // pop(): T {

    // }
}