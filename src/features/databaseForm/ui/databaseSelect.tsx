import { FormField, ErrorMessage } from "../../form";
import { DatabaseCombobox } from "~/components/quickComponents";
import { useDatabaseFormContext } from "./databaseFormContext";

export const DatabaseSelect = () => {
  const { control } = useDatabaseFormContext();

  return (
    <FormField
      control={control}
      name={"database"}
      render={({ field, fieldState }) => (
        <>
          <DatabaseCombobox
            hasNew
            onChange={(value) => {
              field.onChange(value);
            }}
          />
          <ErrorMessage value={fieldState.error.message} />
        </>
      )}
    />
  );
};
