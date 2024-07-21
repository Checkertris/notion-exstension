import { VariantManager, cn, cva, recordLength, clamp } from "~/utils";
import { ContextList } from "~/hooks";
import { ChildrenManager } from "~/features/builder";
import { InferReturnList } from "~/features/formList";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";
import { FormBridgeNodeBuilder } from "../formNodeBuilder/BridgeNodeBuilder";

const fieldsetRowVariants = cva("", {
  variants: {
    count: {
      2: "grid-cols-[repeat(auto-fit,minmax(154px,1fr))]",
      3: "grid-cols-[repeat(auto-fit,minmax(96px,1fr))]",
    },
  },
});

export class FieldsetRowBuilder<T extends FieldsetPageBuilder<any>> extends FormBridgeNodeBuilder<T> {
  variants = new VariantManager(fieldsetRowVariants);
  fieldset_items = new ChildrenManager<FieldsetItemBuilder<T>>();

  build(props: { name: string; context: ContextList<InferReturnList<T>> }): JSX.Element {
    var count = clamp(recordLength(this.fieldset_items.builders), 2, 3) as 2 | 3;
    return <div className={cn(this.variants.get(), fieldsetRowVariants({ count }))}>{this.fieldset_items.build({ context: props.context })}</div>;
  }
}
