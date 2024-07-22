import { VariantManager, cn, cva } from "~/utils";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";
import { DatabaseFormBuilder } from "../../../form/formNodeBuilders/inputNodes/databaseFormBuilder";
import { GroupNodeBuilder } from "../../../form/formNodeBuilders/childNodeBuilder";

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

export class FieldsetBuilder<T extends FieldsetPageBuilder<any>> extends GroupNodeBuilder<T, FieldsetItemBuilder<T> | FieldsetRowBuilder<T> | DatabaseFormBuilder<T>> {
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

  buildContent(name: string, children: JSX.Element[]): JSX.Element {
    return (
      <div className="w-full max-w-md overflow-auto pt-0 shadow-sm">
        <fieldset className={cn("bg-white h-full rounded-lg border pt-4 px-4 pb-6", this.variants.get())}>
          <legend className="px-1 text-sm font-medium">{name}</legend>
          {this.fullHeight ? (
            children
          ) : (
            <div>
              <div className={this.variants.get()}>{children}</div>
            </div>
          )}

          {this.footer}
        </fieldset>
      </div>
    );
  }
}
