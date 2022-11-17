export class Queue<T> {
    container: T[] = [];
    
    constructor() {
    }
    enqueue(item: T): void {
        this.container.push(item);
    }
    
}