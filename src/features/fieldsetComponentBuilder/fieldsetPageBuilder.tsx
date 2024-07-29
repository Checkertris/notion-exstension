import { FieldsetBuilder } from "./fieldsetBuilder";
import { ThreeDivider } from "~/structure/components/divider";
import { UseFormReturn } from "~/features/form";
import { InferForms, ParentNodeBuilder } from "../formNodeBuilders";
import { buildVariants, NonEmptyIterator } from "../builder";

export class FieldsetPageBuilder<T extends Record<string, UseFormReturn>> extends NonEmptyIterator<Record<string, FieldsetBuilder<FieldsetPageBuilder<T>>>, () => JSX.Element> implements ParentNodeBuilder<T> {
  _build(): JSX.Element {
    return <ThreeDivider>{buildVariants.named<[T], typeof this._data>(this._data,)}</ThreeDivider>
  }
}
