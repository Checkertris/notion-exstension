import { VariantManager, cn, cva, clamp, FixedLengthArray } from "~/utils";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";
import { GroupNodeBuilder } from "../../../form/formNodeBuilders/childNodeBuilder";

const fieldsetRowVariants = cva("", {
  variants: {
    count: {
      2: "grid-cols-[repeat(auto-fit,minmax(154px,1fr))]",
      3: "grid-cols-[repeat(auto-fit,minmax(96px,1fr))]",
    },
  },
});

export class FieldsetRowBuilder<T extends FieldsetPageBuilder<any>> extends GroupNodeBuilder<T, FieldsetItemBuilder<T>> {
  variants = new VariantManager(fieldsetRowVariants);

  constructor() {
    super([2, 3])
  }

  buildContent(name: string, children: JSX.Element[]): JSX.Element {
    var count = clamp(this.count(), 2, 3) as 2 | 3;
    return <div className={cn(this.variants.get(), fieldsetRowVariants({ count }))}>{children}</div>;
  }
}