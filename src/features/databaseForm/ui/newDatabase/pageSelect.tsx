import { PageCombobox } from "~/components/quickComponents";
import { useDatabaseFormContext } from "../databaseFormContext";
import { ErrorMessage, FormField } from "~/features/form";

export const PageSelect = () => {
  const { control } = useDatabaseFormContext();

  return (
    <FormField
      control={control}
      name={"name"}
      render={({ field, fieldState }) => (
        <>
          <PageCombobox workspace onChange={field.onChange} />
          <ErrorMessage value={fieldState.error.message} />
        </>
      )}
    />
  );
};
