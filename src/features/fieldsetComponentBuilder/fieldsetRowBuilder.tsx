import { anyLength } from "~/utils";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import VariantManager, { cva, cn } from "~/tools/variantManager";
import { ChildNodeBuilder } from "../formNodeBuilders";
import { buildVariants, ClampIterator } from "../builder";
import { Clamp } from "~/tools/clamp";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";

const fieldsetRowVariants = cva("", {
  variants: {
    count: {
      2: "grid-cols-[repeat(auto-fit,minmax(154px,1fr))]",
      3: "grid-cols-[repeat(auto-fit,minmax(96px,1fr))]",
    },
  },
});

export class FieldsetRowBuilder<T extends FieldsetPageBuilder<any>> extends ClampIterator<Record<string, FieldsetItemBuilder<T>>, Clamp.Range<1, 3>> implements ChildNodeBuilder<T> {
  variants = new VariantManager(fieldsetRowVariants);

  _build(): JSX.Element {
    return <div className={cn(this.variants.get(), fieldsetRowVariants({ count: anyLength(this._data) as 2 | 3 }))}>{buildVariants["named"](this._data)}</div>;
  }
}