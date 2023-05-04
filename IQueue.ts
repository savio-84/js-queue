export interface IQueue<T> {
  enqueue(object: T): void;
  dequeue(): T;
  first(): T;
  size(): number;
  isEmpty(): boolean;
  toString(): void;
}