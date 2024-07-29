import { DatabaseForm, UseDatabaseFormReturn } from "~/features/databaseForm";
import { InputNodeBuilder } from "./inputNodeBuilder"
import { InferForms, ParentNodeBuilder } from "../iFormNodeBuilder";

export class DatabaseFormBuilder<T extends ParentNodeBuilder<any>> extends InputNodeBuilder<T, UseDatabaseFormReturn> {
  build = (forms: InferForms<T>): JSX.Element => <DatabaseForm {...this.getForm(forms)} />
}


