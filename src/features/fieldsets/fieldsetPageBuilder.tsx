import { ParentComponentBuilder, FormListComponentBuilder } from "../builders";
import { ThreeDivider } from "~/structure/components/divider";
import { FormListBuilders, FormListContexts } from "../formList";

import { FieldsetBuilder } from "./fieldsetBuilder";

export class FieldsetPageBuilder<T extends FormListBuilders> extends ParentComponentBuilder<FieldsetBuilder<T>> implements FormListComponentBuilder<T> {
  build(props: { context: FormListContexts<T> }) {
    return <ThreeDivider>{this.buildChildren({ context: props.context })}</ThreeDivider>;
  }
}
