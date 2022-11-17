export class Stack<T> {
    container: T[] = [];
    
    constructor() {
    }
    push(data: T): void {
        this.container.push(data)
    }
    popE(): T {
        return this.container.pop();
    }
    size(): number {
        return this.container.length;
    }

}