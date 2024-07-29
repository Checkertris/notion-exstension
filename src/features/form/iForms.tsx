import yup from "yup";
import RHF from "react-hook-form";
import { LiteralRecord } from "~/utils";
import { Builder } from "~/features/builder";

export type FormSchema = yup.ObjectSchema<LiteralRecord<any>>;
export type FormValues<T extends FormSchema> = yup.InferType<T>;
export type FormDefaultValues<S extends FormSchema> = RHF.DefaultValues<FormValues<S>>;
export type UseFormReturnValues<T extends UseFormReturn> = T extends UseFormReturn<infer A> ? FormValues<A> : never;

export type UseFormReturnValuesList<T extends Record<string, UseFormReturn>> = {
  [k in keyof T]: UseFormReturnValues<T[k]>
}

export type UseFormReturnBuilders<T extends Record<string, UseFormReturn>> = {
  [k in keyof T]: Builder<T[k]>
}

export interface UseFormReturn<S extends FormSchema = FormSchema> extends Omit<RHF.UseFormReturn<FormValues<S>>, "handleSubmit"> {
  defaultValues: FormDefaultValues<S>;
  handleSubmit: () => Promise<FormValues<S> | false>;
}

export interface UseFormListReturn<T extends Record<string, UseFormReturn>> {
  trigger: () => void;
  handleSubmit: () => Promise<UseFormReturnValuesList<T> | false>;
}