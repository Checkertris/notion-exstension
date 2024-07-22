import { Table, TableBody, TableCell, TableRow } from "~/services/shadcn/components/ui/table";
import PropertySelect from "./propertySelect";
import { FormField, ErrorMessage } from "~/features/form";
import { useDatabaseFormContext } from "../databaseFormContext";

export const PropertiesTable = () => {
  const { control, properties } = useDatabaseFormContext();

  return (
    <Table>
      <TableBody>
        {Object.entries(properties).map(([label, property]) => (
          <FormField
            key={label}
            control={control}
            name={label as any}
            render={({ field, fieldState }) => (
              <TableRow key={property.label}>
                <TableCell className="p-1 font-normal">
                  <div className="flex flex-col">
                    <div className="flex flex-row">{property.label}</div>
                    <ErrorMessage value={fieldState.error.message} />
                  </div>
                </TableCell>
                <TableCell className="p-1">
                  <PropertySelect type={property.type} field={field} />
                </TableCell>
              </TableRow>
            )}
          />
        ))}
      </TableBody>
    </Table>
  );
};
