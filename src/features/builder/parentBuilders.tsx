import { reduceObject } from "~/utils";
import { Builder, BuilderListReturn, BuilderReturn } from "./builder";
import { ReturnableIterator } from "./tools/iterator";

type ArrayChildBuilder<T extends any[]> = {
  build(name: string, ...args: T)
}

type RecordChildBuilder<T extends any[]> = {
  build(...args: T)
}

abstract class BaseParentBuilder<T extends Record<string, Builder>, TReturn = any> implements Builder<TReturn> {
  protected children: T

  constructor(iterator: ReturnableIterator<T>) {
    this.children = iterator.return()
  }

  abstract buildChildren(...args)

  abstract build(...args): TReturn
}

export abstract class ArrayParentBuilder<TArgs extends any[], TChildren extends ArrayChildBuilder<TArgs>, TReturn = any> extends BaseParentBuilder<Record<string, TChildren>, TReturn> {
  buildChildren(...args: TArgs): BuilderReturn<TChildren>[] {
    return Object.entries(this.children).map(([name, child]) => child.build(name, ...args));
  }
}

export abstract class RecordParentBuilder<TArgs extends any[], T extends Record<string, RecordChildBuilder<TArgs>>, TReturn = any> extends BaseParentBuilder<T, TReturn> {
  buildChildren(...args: TArgs): BuilderListReturn<T> {
    return reduceObject(this.children, { value: ([key, builder]) => builder.build(...args) })
  }
}
