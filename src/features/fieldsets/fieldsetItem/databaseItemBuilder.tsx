import { FormListBuilders } from "~/features/formList";
import { ContextUserList } from "~/hooks";
import { PathByType } from "~/utils";
import { FormListUseFormReturns } from "~/features/formList";

import { FieldsetItemBuilder } from "./fieldsetItemBuilder";
import { DatabaseForm, DatabaseFormBuilder } from "~/features/databaseForm";
import { UseDatabaseFormReturn } from "~/features/databaseForm/useDatabaseFormReturn";

export class DatabaseItemBuilder<T extends FormListBuilders> extends FieldsetItemBuilder<T> {
  path: PathByType<T, DatabaseFormBuilder<string>>;

  constructor(path: PathByType<T, DatabaseFormBuilder<string>>) {
    super();
    this.path = path;
  }

  build(props: { name: string; context: ContextUserList<FormListUseFormReturns<T>> }): JSX.Element {
    const Component = () => {
      const database = props.context[this.path]() as unknown;
      return <DatabaseForm {...(database as UseDatabaseFormReturn)} />;
    };

    return <Component />;
  }
}
