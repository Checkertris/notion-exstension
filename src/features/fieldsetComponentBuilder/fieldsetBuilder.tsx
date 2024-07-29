import VariantManager, { cva, cn } from "~/tools/variantManager";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";
import { ChildNodeBuilder } from "../formNodeBuilders";
import { buildVariants, NonEmptyIterator } from "../builder";

//md:row-span-2 lg:row-span-1

const fieldsetVariants = cva("grid", {
  variants: {
    gap: {
      2: "gap-2",
      3: "gap-3",
      4: "gap-4",
      6: "gap-6",
    },
  },
  defaultVariants: {
    gap: 6,
  },
});

export class FieldsetBuilder<T extends FieldsetPageBuilder<any>> extends NonEmptyIterator<Record<string, FieldsetItemBuilder<T> | FieldsetRowBuilder<T>>, () => > implements ChildNodeBuilder<T> {
  variants = new VariantManager(fieldsetVariants);
  fullHeight?: boolean;
  footer?: JSX.Element;

  gap(gap: 2 | 3 | 4 | 6) {
    this.variants.props.gap = gap;
    return this;
  }

  addFooter(footer: JSX.Element) {
    this.footer = footer;
    return this;
  }

  addRow(row: FieldsetRowBuilder<T>) {
    this._data = { ...this._data, ["row"]: row }
  }

  addFieldset(fieldset: { [name: string]: FieldsetItemBuilder<T> }) {
    this._data = { ...this._data, ...fieldset }
  }

  _build(name: string): JSX.Element {
    return (
      <div className="w-full max-w-md overflow-auto pt-0 shadow-sm">
        <fieldset className={cn("bg-white h-full rounded-lg border pt-4 px-4 pb-6", this.variants.get())}>
          <legend className="px-1 text-sm font-medium">{name}</legend>
          {this.fullHeight ? (
            buildVariants[""]
          ) : (
            <div>
              <div className={this.variants.get()}>{buildVariants.named(this._data)}</div>
            </div>
          )}

          {this.footer}
        </fieldset>
      </div>
    );
  }
}

