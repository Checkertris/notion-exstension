import { cn, cva } from "~/services/shadcn/lib/utils";
import { FormListBuilders, FormListContexts } from "../formList";

import { DefaultFieldsetItemBuilder } from "./fieldsetItem/defaultFieldsetItem/defaultFieldsetItemBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { VariantManager } from "../builders/component/variantManager";

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

export class FieldsetBuilder<T extends FormListBuilders> extends ParentComponentBuilder<FieldsetRowBuilder<T> | DefaultFieldsetItemBuilder<T>> implements ChildComponentBuilder, FormListComponentBuilder<T> {
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

  build(props: { name: string; context: FormListContexts<T> }) {
    return (
      <div className="w-full max-w-md overflow-auto pt-0 shadow-sm">
        <fieldset className={cn("bg-white h-full rounded-lg border pt-4 px-4 pb-6", this.variants.get())}>
          <legend className="px-1 text-sm font-medium">{props.name}</legend>
          {this.fullHeight ? (
            this.buildChildren()
          ) : (
            <div>
              <div className={this.variants.get()}>{this.buildChildren({ context: props.context })}</div>
            </div>
          )}

          {this.footer}
        </fieldset>
      </div>
    );
  }
}
