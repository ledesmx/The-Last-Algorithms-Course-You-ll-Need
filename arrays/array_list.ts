export class ArrayList<T> {
    public length: number;
    public capacity: number;
    private array: T[];
    constructor(cap: number = 0) {
        this.length = 0;
        this.capacity = cap;
        this.array = [];
    }
    fromValues(...values: T[]): void {
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
    push(value: T): void {
        //  NOTE: When the capacity is exceeded it should double its current value

        if(this.capacity === 0) {
            this.capacity++;
        }

        if(this.length === this.capacity) {
            let arr: T[] = [];
            for(let i = 0; i < this.length; ++i) {
                arr[i] = this.array[i]; 
            }
            this.capacity = this.capacity * 2;
            this.array = arr;
        }

        this.array[this.length] = value;
        this.length++;
    }
    pop(): T | undefined {
        if(this.capacity === 0) {
            return undefined;
        }
        const value = this.array[this.length - 1];
        this.length--;
        return value;
    }
    enqueue(value: T): void {
        if(this.capacity === 0) {
            this.capacity++;
        }

        let arr: T[] = [];
        for(let i = 0; i < this.length; ++i) {
            arr[i + 1] = this.array[i]; 
        }

        if(this.length === this.capacity) {
            this.capacity = this.capacity * 2;
        }
        this.array = arr;

        this.array[0] = value;
        this.length++;
    }
    deque(): T | undefined {
        if(this.length === 0) {
            return undefined;
        }

        const value = this.array[0];
        for(let i = 1; i < this.length; ++i) {
            this.array[i - 1] = this.array[i];
        }
        this.length--;
        return value;
    }
    insertAtIndex(value: T, index: number): void {
        if(index < 0) {
            throw new Error("array list index is negative");
        }
        if(index > this.length) {
            throw new Error("array list index out of length");
        }

        // When the capacity is exceeded it should double its current value
        if(this.length === this.capacity) {
            const arr: T[] = []
            this.capacity = this.capacity === 0 ? 1 : this.capacity * 2;
            for(let i = 0; i <= this.length; ++i) {
                if(i === index) {
                    arr[i] = value;
                    continue;
                }
                if(i > index) {
                    arr[i] = this.array[i -1 ];
                    continue;
                }
                
                arr[i] = this.array[i];
            }
            this.array = arr;
            this.length++;
            return;
        }

    for(let i = index; i <= this.length; ++i) {
        const aux = this.array[i];
        this.array[i] = value;
        value = aux;
    }
    this.length++;
    }
    // removeAtIndex() T | undefined {

    // }
   
}