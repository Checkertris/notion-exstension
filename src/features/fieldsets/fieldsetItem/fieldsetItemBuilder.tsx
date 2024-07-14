import { FormListBuilders, FormListUseFormReturns } from "../../formList";
import { ChildComponentBuilder, FormListComponentBuilder } from "../../builders";
import { ContextUserList } from "~/hooks";

export abstract class FieldsetItemBuilder<T extends FormListBuilders> implements FormListComponentBuilder<T>, ChildComponentBuilder {
  abstract build(props: { name: string; context: ContextUserList<FormListUseFormReturns<T>> }): JSX.Element;
}
