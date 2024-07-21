import { RecordValue } from "~/utils";
import { Builder } from "./types";

export abstract class IterableBuilder<T extends Record<string, any>> implements Builder {
  abstract self: new (data: T) => IterableBuilder<T>;
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
    return new this.self({ ...this.data, ...item });
  }

  abstract build(props?);
}
