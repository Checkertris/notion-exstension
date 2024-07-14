import Builder from "./builder";
import { RecordValue } from "~/utils";

export default abstract class IterableBuilder<T extends Record<string, any>> extends Builder {
  abstract self: new (data: T) => IterableBuilder<T>;
  data: T;

  constructor(data: T) {
    super();
    this.data = data;
  }

  add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
    return new this.self({ ...this.data, ...item });
  }
}
