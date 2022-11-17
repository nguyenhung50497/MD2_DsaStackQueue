export class Stack<T> {
    container: T[] = [];
    
    constructor() {
    }
    push(data: T): void {
        this.container.push(data)
    }
    pop(): T {
        return this.container.();
    }
    size(): number {
        return this.container.length;
    }
    
}