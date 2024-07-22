import { VariantManager, cva } from "~/utils";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { QuickInputBuilder } from "../../../form/formNodeBuilders/inputNodes/quickInputBuilder";
import { OutputBuilder } from "../../../form/formNodeBuilders/childNodes/outputBuilder";
import { CustomBuilder } from "../../../form/formNodeBuilders/childNodes/customBuilder";
import { BridgeNodeBuilder } from "../../../form/formNodeBuilders/childNodeBuilder";

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

export class FieldsetItemBuilder<T extends FieldsetPageBuilder<any>> extends BridgeNodeBuilder<T, QuickInputBuilder<T> | OutputBuilder | CustomBuilder> {
  variants = new VariantManager(fieldsetItemVariants);

  indent() {
    this.variants.props.indent = true;
    return this;
  }

  gap(gap: 2 | 3 | 4) {
    this.variants.props.gap = gap;
    return this;
  }

  buildContent(name: string, child: JSX.Element): JSX.Element {
    return (
      <div className={this.variants.get()}>
        {name && <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{name}</label>}
        {child}
      </div>
    );
  }
}
