import { RecordValue } from "~/utils";
import { Builder } from "./builder";

export abstract class IterableBuilder<T extends Record<string, any>, TReturn = any> implements Builder<TReturn> {
  abstract self: new (data: T) => IterableBuilder<T, TReturn>;
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
    return new this.self({ ...this.data, ...item });
  }

  abstract build(...args): TReturn
}
