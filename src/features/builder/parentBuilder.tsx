import { FixedLengthArray, recordLength, shiftRecord } from "~/utils";
import { Builder } from "./builder";

type ChildBuilder<T extends any[]> = {
  build(name: string, ...args: T)
}

export class ChildrenManager<TArgs extends any[], T extends ChildBuilder<TArgs>> {
  private children: Record<string, T>;
  private clamp: FixedLengthArray<number, 2>

  constructor(clamp?: FixedLengthArray<number, 2>) {
    this.clamp = clamp
  }

  count() {
    return recordLength(this.children)
  }

  add(item: { [name: string]: T }) {
    if (!this.clamp) this.children = { ...this.children, ...item };
    else if (this.clamp && recordLength(this.children) >= this.clamp[1]) return { ...shiftRecord(this.children), ...item }
  }

  build(...args: TArgs) {
    if (this.clamp && recordLength(this.children) < this.clamp[0]) throw ReferenceError("not enough children in child manager")
    return Object.entries(this.children).map(([name, child]) => child.build(name, ...args));
  }

}

export abstract class ParentBuilder<TArgs extends any[], T extends ChildBuilder<TArgs>> implements Builder {
  private children_manager: ChildrenManager<TArgs, T>
  count: typeof this.children_manager.count
  add: typeof this.children_manager.add
  buildChildren: typeof this.children_manager.build

  constructor(clamp?: FixedLengthArray<number, 2>) {
    this.children_manager = new ChildrenManager<TArgs, T>(clamp)
    this.count = this.children_manager.count
    this.add = this.children_manager.add
    this.buildChildren = this.children_manager.build
  }

  abstract build(...args);
}