import { DatabaseForm, UseDatabaseFormReturn } from "~/features/databaseForm";
import { InputNodeBuilder } from "../childNodeBuilder"
import { ParentNodeBuilder } from "../parentNodeBuilder";

export class DatabaseFormBuilder<T extends ParentNodeBuilder<any>> extends InputNodeBuilder<T, UseDatabaseFormReturn> {
  buildContent(form: UseDatabaseFormReturn<string>): JSX.Element {
    return <DatabaseForm {...form} />
  }
}


