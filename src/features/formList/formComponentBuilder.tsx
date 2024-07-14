import { PathByValue, RecordValue } from "~/utils";
import { ChildrenManager, ChildBuilder, DataPassingBuilder } from "../builders";
import { AnyFormBuilder, AnyUseFormReturn, FormListBuilders } from "../formList";
import { UseFormReturn } from "react-hook-form";

interface FormComponentBuilder<T extends FormListBuilders | AnyFormBuilder> extends DataPassingBuilder<"context", T extends AnyFormBuilder ? Context<T> : ContextList<T>> {}

interface ChildFormComponentBuilder<T extends FormListBuilders | AnyFormBuilder> extends FormComponentBuilder<T>, ChildBuilder {}

abstract class ParrentFormComponentBuilder<T extends FormListBuilders | AnyFormBuilder, TChildren extends ChildFormComponentBuilder<T>> implements FormComponentBuilder<T> {
  childrenManager: ChildrenManager<TChildren>;

  add<K extends string, I extends RecordValue<T>>(item: { [k in K]: I }) {
    this.childrenManager.add(item);
  }

  abstract build(props?: { [key in "context"]: T } & any);
}

abstract class FormPageComponentBuilder<T extends FormListBuilders | AnyFormBuilder, TChildren extends ChildFormComponentBuilder<T>> extends ParrentFormComponentBuilder<T, TChildren> {}

abstract class FormPasserComponentBuilder<T extends FormListBuilders | AnyFormBuilder, TChildren extends ChildFormComponentBuilder<T>> extends ParrentFormComponentBuilder<T, TChildren> implements ChildBuilder {}

abstract class FormUserComponentBuilder<T extends FormListBuilders | AnyFormBuilder, TValue, TForm, TFormKey extends KeyByValue<T, TForm>> implements FormComponentBuilder<T>, ChildBuilder {
  form: UseFormReturn;
  constructor(...params: T extends AnyFormBuilder ? [path: PathByValue<AnyUseFormReturn<T>, TValue>] : [form: TFormKey, path: PathByValue<AnyUseFormReturn<T[TFormKey]>, TForm>]) {
    super();
  }
  abstract build(props?: { context: T; name: string });
}
