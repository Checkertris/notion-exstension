import { FormSchema, FormValues, UseFormReturn } from "../form";
import Builder from "../builders";
import { ContextList } from "~/hooks";

export type AnyFormBuilder<S extends FormSchema = FormSchema> = Builder<UseFormReturn<S>>;

export type AnyUseFormReturn<T extends AnyFormBuilder> = T extends Builder<infer A> ? A : never;

export type AnyFormValues<T extends AnyFormBuilder> = T extends Builder<UseFormReturn<infer S>> ? FormValues<S> : never;

type AnyFormBuilderSchema<T extends AnyFormBuilder> = ReturnType<T["build"]> extends UseFormReturn<infer A> ? A : never;

export type FormListBuilders = Record<string, AnyFormBuilder>;

export type FormListUseFormReturns<T extends FormListBuilders> = {
  [k in keyof T]: UseFormReturn<AnyFormBuilderSchema<T[k]>>;
};

export type FormListContexts<T extends FormListBuilders> = ContextList<FormListUseFormReturns<T>>;

export type FormListValues<T extends FormListBuilders> = {
  [k in keyof T]: T extends Builder<UseFormReturn<infer S>> ? FormValues<S> : never;
};

export interface UseFormListReturn<T extends Record<string, AnyFormBuilder>> {
  contextList: FormListContexts<T>;
  contextWrapper: (props: { children: any }) => JSX.Element;
  triggerAll: () => void;
  trySubmitAll: () => Promise<FormListValues<T>>;
}
