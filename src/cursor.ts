export default interface PromiseCursor<T> {
  readonly data: T[];
  readonly next: PromiseCursorProvider<T>;
}

export type PromiseCursorProvider<T> = () => Promise<PromiseCursor<T>>;
