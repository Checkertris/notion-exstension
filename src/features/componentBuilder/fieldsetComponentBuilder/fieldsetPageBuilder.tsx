import { ContextList } from "~/hooks";
import { UseFormReturnList } from "~/features/formList";
import { ChildrenManager } from "~/features/builder";
import { FieldsetBuilder } from "./fieldsetBuilder";
import { PageNodeBuilder } from "../formNodeBuilder/nodeBuilders";

export class FieldsetPageBuilder<T extends UseFormReturnList<any>> extends PageNodeBuilder<T> {
  fieldsets = new ChildrenManager<FieldsetBuilder<FieldsetPageBuilder<T>>>();

  build(props: { context: ContextList<T> }): JSX.Element {
    return <ThreeDivider>{this.fieldsets.build({ context: props.context })}</ThreeDivider>;
  }
}
