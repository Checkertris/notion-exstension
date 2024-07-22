import { QuickTextField } from "~/components/quickComponents";
import { useDatabaseFormContext } from "../databaseFormContext";
import { ErrorMessage, FormField } from "~/features/form";

export const NameInput = () => {
  const { control } = useDatabaseFormContext();

  return (
    <FormField
      control={control}
      name={"name"}
      render={({ field, fieldState }) => (
        <>
          <QuickTextField placeholder="Database name" mode="onBlur" onChange={field.onChange} />
          <ErrorMessage value={fieldState.error.message} />
        </>
      )}
    />
  );
};
