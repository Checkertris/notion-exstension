import { InferType, ObjectSchema } from "yup";
import { DefaultValues, UseFormReturn as RHFUseFormReturn } from "react-hook-form";
import { LiteralRecord } from "~/utils";

export type FormSchema = ObjectSchema<LiteralRecord<any>>;
export type FormValues<T extends FormSchema> = InferType<T>;
export type FormDefaultValues<S extends FormSchema> = DefaultValues<FormValues<S>>;
export type UseFormReturnValues<T extends UseFormReturn> = T extends UseFormReturn<infer A> ? FormValues<A> : never;

export interface UseFormReturn<S extends FormSchema = FormSchema> extends Omit<RHFUseFormReturn<FormValues<S>>, "handleSubmit"> {
  defaultValues: FormDefaultValues<S>;
  handleSubmit: () => Promise<null | FormValues<S>>;
}
