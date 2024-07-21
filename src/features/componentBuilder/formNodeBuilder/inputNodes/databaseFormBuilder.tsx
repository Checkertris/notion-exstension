import { DatabaseForm, UseDatabaseFormReturn } from "~/features/databaseForm";
import { ContextList } from "~/hooks";

export class DatabaseFormBuilder<T extends PageNodeBuilder<any>> extends InputNodeBuilder<T, UseDatabaseFormReturn> {
  build(props: { context: ContextList<InferReturnList<T>> }): JSX.Element {
    const Component = () => {
      return <DatabaseForm {...this.useForm(props.context)} />;
    };

    return <Component />;
  }
}
