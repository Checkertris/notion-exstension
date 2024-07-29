import VariantManager, { cva } from "~/tools/variantManager";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { InferForms, InputNodeBuilder } from "../formNodeBuilders";
import { SingleIterator } from "../builder";

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

export class FieldsetItemBuilder<T extends FieldsetPageBuilder<any>> extends SingleIterator<InputNodeBuilder<T, any>, (name: string, forms: InferForms<T>) => JSX.Element> {
  variants = new VariantManager(fieldsetItemVariants);

  indent() {
    this.variants.props.indent = true;
    return this;
  }

  gap(gap: 2 | 3 | 4) {
    this.variants.props.gap = gap;
    return this;
  }

  _build(name: string, forms: InferForms<T>): JSX.Element {
    return (
      <div className={this.variants.get()}>
        {name && <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{name}</label>}
        {this._data.build(forms)}
      </div>
    );
  }
}
