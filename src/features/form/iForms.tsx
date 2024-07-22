import yup from "yup";
import RHF from "react-hook-form";
import { LiteralRecord } from "~/utils";
import FlexibleRecord from "~/utils/flexibleRecord";
import { Builder } from "../builder";

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

export type FlexibleUseFormReturnValues<T extends FlexibleRecord.Type<UseFormReturn>> = T extends UseFormReturn ? UseFormReturnValues<T> : T extends Record<string, UseFormReturn> ? UseFormReturnValuesList<T> : never

export interface UseFormReturn<S extends FormSchema = FormSchema> extends Omit<RHF.UseFormReturn<FormValues<S>>, "handleSubmit"> {
  defaultValues: FormDefaultValues<S>;
  handleSubmit: () => Promise<FormValues<S> | false>;
}

export interface UseFormListReturn<T extends FlexibleRecord.Type<UseFormReturn>> {
  trigger: () => void;
  handleSubmit: () => Promise<FlexibleUseFormReturnValues<T> | false>;
}