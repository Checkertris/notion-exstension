import { cva } from "~/services/shadcn/lib/utils";
import { FormListBuilders, FormListContexts } from "../../../formList";
import { VariantManager } from "../../../builders";

import { FieldsetItemBuilder } from "../fieldsetItemBuilder";

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

export abstract class DefaultFieldsetItemBuilder<T extends FormListBuilders> extends FieldsetItemBuilder<T> {
  variants = new VariantManager(fieldsetItemVariants);

  abstract buildBody(context: FormListContexts<T>): JSX.Element;

  indent() {
    this.variants.props.indent = true;
    return this;
  }

  gap(gap: 2 | 3 | 4) {
    this.variants.props.gap = gap;
    return this;
  }

  build(props: { name: string; context: FormListContexts<T> }) {
    return (
      <div className={this.variants.get()}>
        {props.name && <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{props.name}</label>}
        {this.buildBody(props.context)}
      </div>
    );
  }
}
