import { RecordValue } from "~/utils";

export type ReturnableIterator<T extends Record<string, any>> = typeof BaseIterator<T> & {
  return(): T
}

export abstract class BaseIterator<T extends Record<string, any>> {
  protected data: T;

  constructor(data: T) {
    this.data = data;
  }
}

export class Iterator<T extends Record<string, any>> extends BaseIterator<T> {
  add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
    return new Iterator(({ ...this.data, ...item }))
  }

  return() {
    return this.data
  }
}
