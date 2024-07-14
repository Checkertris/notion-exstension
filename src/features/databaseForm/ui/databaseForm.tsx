import { newSym } from "~/constants";
import { QuickMultiAccordion } from "~/components/quickComponents";

import { DatabaseSelect } from "./databaseSelect";
import { DatabaseFormContext } from "./databaseFormContext";
import { PropertiesTable } from "./existingDatabase/propertiesTable";
import { PageSelect } from "./newDatabase/pageSelect";
import { NameInput } from "./newDatabase/nameInput";
import { UseDatabaseFormReturn } from "../useDatabaseFormReturn";

export const DatabaseForm = (form: UseDatabaseFormReturn<any>) => {
  function setAccordion() {
    const database = form.watch("database");
    if (!database) return undefined;
    else if (database == newSym) return 1;
    else return 0;
  }

  return (
    <DatabaseFormContext.Provider value={form}>
      <div className="grid gap-5">
        {fielsetItem("Database")
          .custom(<DatabaseSelect />)
          .build()}
        <QuickMultiAccordion
          current={setAccordion()}
          items={[
            fieldsetItem("Properties")
              .custom(<PropertiesTable />)
              .indent()
              .build(),
            fieldsetRow([fieldsetItem("Name").custom(<NameInput />), fieldsetItem("Parent Page").custom(<PageSelect />)]).build(),
          ]}
        />
      </div>
    </DatabaseFormContext.Provider>
  );
};
