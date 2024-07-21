import { VariantManager, cva } from "~/utils";
import { ContextList } from "~/hooks";
import { InferReturnList } from "~/features/formList";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FormBridgeNodeBuilder } from "../formNodeBuilder/BridgeNodeBuilder";
import { QuickInputBuilder } from "../formNodeBuilder/inputNodes/quickInputBuilder";
import { OutputBuilder } from "../formNodeBuilder/genericNodes/outputBuilder";
import { CustomBuilder } from "../formNodeBuilder/genericNodes/customBuilder";

const fieldsetItemVariants = cva("grid", {
  variants: {
    gap: {
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
    },
    indent: {
      true: "ml-4 mr-3",
    },
  },
  defaultVariants: {
    gap: 3,
  },
});

export class FieldsetItemBuilder<T extends FieldsetPageBuilder<any>> extends FormBridgeNodeBuilder<T> {
  variants = new VariantManager(fieldsetItemVariants);
  private content: QuickInputBuilder<T> | OutputBuilder | CustomBuilder;

  indent() {
    this.variants.props.indent = true;
    return this;
  }

  gap(gap: 2 | 3 | 4) {
    this.variants.props.gap = gap;
    return this;
  }

  add(props: { content: QuickInputBuilder<T> | OutputBuilder | CustomBuilder }) {
    this.content = props.content;
  }

  build(props: { name: string; context: ContextList<InferReturnList<T>> }) {
    return (
      <div className={this.variants.get()}>
        {props.name && <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{props.name}</label>}
        {this.content.build({ context: props.context })}
      </div>
    );
  }
}
