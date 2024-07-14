import { Controller, ControllerProps, FieldPath, FieldValues } from "react-hook-form";
import { cn } from "~/services/shadcn/lib/utils";

export function FormField<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(props: ControllerProps<TFieldValues, TName>) {
  return <Controller {...props} />;
}

export function ErrorMessage(props: { value: string; className? }) {
  return <p className={cn("text-[0.8rem] font-medium text-destructive", props.className)}>{props.value}</p>;
}
