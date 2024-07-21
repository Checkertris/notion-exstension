import { VariantManager, cn, cva } from "~/utils";
import { ContextList } from "~/hooks";
import { InferReturnList } from "~/features/formList";
import { ChildrenManager } from "~/features/builder";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";
import { DatabaseFormBuilder } from "~/features/databaseForm";
import { FormBridgeNodeBuilder } from "../formNodeBuilder/BridgeNodeBuilder";

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

export class FieldsetBuilder<T extends FieldsetPageBuilder<any>> extends FormBridgeNodeBuilder<T> {
  children = new ChildrenManager<FieldsetItemBuilder<T> | FieldsetRowBuilder<T> | DatabaseFormBuilder<any>>();
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

  build(props: { name: string; context: ContextList<InferReturnList<T>> }): JSX.Element {
    return (
      <div className="w-full max-w-md overflow-auto pt-0 shadow-sm">
        <fieldset className={cn("bg-white h-full rounded-lg border pt-4 px-4 pb-6", this.variants.get())}>
          <legend className="px-1 text-sm font-medium">{props.name}</legend>
          {this.fullHeight ? (
            this.children.build(props)
          ) : (
            <div>
              <div className={this.variants.get()}>{this.children.build(props)}</div>
            </div>
          )}

          {this.footer}
        </fieldset>
      </div>
    );
  }
}
