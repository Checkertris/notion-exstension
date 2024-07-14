import { ChildComponentBuilder, ParentComponentBuilder, VariantManager, FormListComponentBuilder } from "../builders";
import { recordLength, clamp } from "~/utils";
import { cn, cva } from "~/services/shadcn/lib/utils";
import { FormListBuilders, FormListContexts } from "../formList";

import { DefaultFieldsetItemBuilder } from "./fieldsetItem/defaultFieldsetItem/defaultFieldsetItemBuilder";

const fieldsetRowVariants = cva("", {
  variants: {
    count: {
      2: "grid-cols-[repeat(auto-fit,minmax(154px,1fr))]",
      3: "grid-cols-[repeat(auto-fit,minmax(96px,1fr))]",
    },
  },
});

export class FieldsetRowBuilder<T extends FormListBuilders> extends ParentComponentBuilder<DefaultFieldsetItemBuilder<T>> implements ChildComponentBuilder, FormListComponentBuilder<T> {
  variants = new VariantManager(fieldsetRowVariants);

  build(props: { name: string; context: FormListContexts<T> }) {
    return <div className={cn(this.variants.get(), fieldsetRowVariants({ count: clamp(recordLength(this.children), 2, 3) as 2 | 3 }))}>{this.buildChildren({ context: props.context })}</div>;
  }
}
