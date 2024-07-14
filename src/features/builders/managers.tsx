import { AnyObject } from "~/utils";
import { ChildBuilder } from "./iBuilders";
import { cn, VariantProps, Variants } from "~/services/shadcn/lib/utils";

export abstract class ChildrenManager<TChildren extends ChildBuilder> {
  children: Record<string, TChildren>;

  add<K extends string, T>(item: { [k in K]: T }) {
    this.children = { ...this.children, ...item };
    return this;
  }

  buildChildren(props?: AnyObject) {
    return Object.entries(this.children).map(([name, child]) => child.build({ ...props, name: name }));
  }
}

export class VariantManager<V extends Variants> {
  variants: V;
  props: VariantProps<V>;

  constructor(variants: V) {
    this.variants = variants;
  }

  get() {
    return cn(this.variants(this.props));
  }
}
