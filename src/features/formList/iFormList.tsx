import { FormSchema, FormValues, UseFormReturn } from "../form";
import { ContextList } from "~/hooks";
import { Builder } from "../builder";

export type AnyFormBuilder<S extends FormSchema = FormSchema> = Builder<UseFormReturn<S>>;

export type AnyUseFormReturn<T extends AnyFormBuilder = AnyFormBuilder> = T extends Builder<infer A> ? A : never;

export type AnyFormValues<T extends AnyFormBuilder> = T extends Builder<UseFormReturn<infer S>> ? FormValues<S> : never;

type AnyFormSchema<T extends AnyFormBuilder> = ReturnType<T["build"]> extends UseFormReturn<infer A> ? A : never;

export type FormBuilderList = Record<string, AnyFormBuilder>;

export type UseFormReturnList<T extends FormBuilderList> = {
  [k in keyof T]: UseFormReturn<AnyFormSchema<T[k]>>;
};

export type FormValuesList<T extends FormBuilderList> = {
  [k in keyof T]: T extends Builder<UseFormReturn<infer S>> ? FormValues<S> : never;
};

export interface UseFormListReturn<T extends Record<string, AnyFormBuilder>> {
  contextList: ContextList<T>;
  contextWrapper: (props: { children: any }) => JSX.Element;
  triggerAll: () => void;
  trySubmitAll: () => Promise<FormValuesList<T>>;
}
