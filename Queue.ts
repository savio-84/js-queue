import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T> {
  private storage: T[];
  private maxLength: number;
  private length: number;

  constructor() {
    this.maxLength = 10;
    this.storage = new Array(this.maxLength);
    this.length = 0;
  }

  public enqueue(object: T): void {
    if (this.size() + 1 == this.maxLength) {
      this.maxLength *= 2;
      const aux = new Array(this.maxLength);
      for (let i = 0; i<this.size(); i++) {
        aux[i] = this.storage[i];
      }
      this.storage = aux;
    }
    this.storage[this.size()] = object;
    this.length++;
  }

  public dequeue(): T {
    if (this.isEmpty()) throw new Error("The queue is empty!");
    const aux = this.first();
    for (let i = 0; i < this.size(); i++) {
      this.storage[i] = this.storage[i+1];
    }
    this.length--;
    return aux;
  }

  public first(): T {
    return this.storage[0];
  }

  public size(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.size() === 0;
  }

  public toString() {
    console.log(this.storage);
  }
}