import { SimpleParentNodeBuilder } from "../../../form/formNodeBuilders/parentNodeBuilder";
import { FieldsetBuilder } from "./fieldsetBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { ThreeDivider } from "~/structure/components/divider";
import { UseFormReturn } from "~/features/form";

export class FieldsetPageBuilder<T extends Record<string, UseFormReturn>> extends SimpleParentNodeBuilder<T, FieldsetBuilder<FieldsetPageBuilder<T>> | FieldsetRowBuilder<FieldsetPageBuilder<T>>> {
  buildContent(children: JSX.Element[]): JSX.Element {
    return <ThreeDivider>{children}</ThreeDivider>
  }
}
