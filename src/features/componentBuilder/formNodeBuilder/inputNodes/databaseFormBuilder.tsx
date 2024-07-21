import { DatabaseForm, UseDatabaseFormReturn } from "~/features/databaseForm";
import { InputNodeBuilder, PageNodeBuilder } from "../nodeBuilders"
import { AnyUseFormReturn } from "~/features/formList";
import { InferUseFormReturnList } from "../types";
import { KeyByValue, PathByValue } from "~/utils";

export class DatabaseFormBuilder<T extends PageNodeBuilder<any>> extends InputNodeBuilder<T, UseDatabaseFormReturn> {
  buildContent(props: { name: string; form: UseDatabaseFormReturn<string>; }): JSX.Element {
    return <DatabaseForm {...props.form} />
  }
}

export class QuickInputBuilder<TPage extends PageNodeBuilder<any>, TForm extends AnyUseFormReturn, TValue> extends InputNodeBuilder<TPage, TForm> {
  path: PathByValue<TForm, TValue>
  constructor(key: KeyByValue<InferUseFormReturnList<TPage>, TForm>, path: PathByValue<TForm, TValue>) {
    super(key)
    this.path = path
  }

  buildContent(props: { name: string; form: any; }): JSX.Element {

  }
}