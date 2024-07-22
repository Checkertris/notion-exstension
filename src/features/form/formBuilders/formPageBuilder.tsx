import { reduceObject } from "~/utils";
import { Builder, ChildrenManager, IterableBuilder } from "../../builder";
import { ParentNodeBuilder } from "../formNodeBuilders/parentNodeBuilder";
import { UseFormReturn } from "../iForms";
import useFormList from "../useFormList";

export class FormListBuilder<T extends Record<string, UseFormReturn>> extends IterableBuilder<UseFormReturnBuilders<T>> {
  self = FormListBuilder<T>;
  private pages = new ChildrenManager<[T], ParentNodeBuilder<T>>()
  addPage = this.pages.add

  build() {
    var useFormReturns = reduceObject(this.data, { value: ([name, builder]: [string, Builder<UseFormReturn>]) => builder.build() }) as T
    return [useFormList(useFormReturns), this.pages.build(useFormReturns)]
  }
}
