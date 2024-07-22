import { DatabaseData, PropertyType } from "~/features/notion";
import { QuickSelect, quickSelectProps } from "~/components/quickComponents/quickFields/quickSelect";
import { ControllerRenderProps } from "react-hook-form";
import { quickOption } from "~/components/quickComponents";
import { useDatabaseFormContext } from "../databaseFormContext";

const PropertySelect = (props: { type: PropertyType; field: ControllerRenderProps<any, any> }) => {
  const { watch } = useDatabaseFormContext();

  function getProperties(): quickOption<string>[] {
    var database = watch("database") as DatabaseData;
    var properties = database.properties?.filter((property) => property.property_type == props.type);
    return properties?.map((property) => ({ value: property.name, label: property.name }));
  }

  const selectProps = {
    options: getProperties(),
    defaultValue: props.field.value,
    subject: "property",
    emptyMessage: "no properties found",
    onChange: (value: string) => props.field.onChange(value),
    style: "ghost",
    placeholder: "select",
  } as quickSelectProps;

  return <QuickSelect {...selectProps} />;
};

export default PropertySelect;
