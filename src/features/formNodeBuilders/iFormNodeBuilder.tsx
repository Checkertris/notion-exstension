import { UseFormReturn } from "../form";

export interface ParentNodeBuilder<T extends Record<string, UseFormReturn>> {
    build(forms: T): JSX.Element;
}

export type InferForms<T extends ParentNodeBuilder<any>> = T extends ParentNodeBuilder<infer A> ? A : never;

export type NamedChildNodeBuilder<TParent extends ParentNodeBuilder<any>> = {
    build(name: string, forms: InferForms<TParent>): JSX.Element
}

export type ChildNodeBuilder<TParent extends ParentNodeBuilder<any>> = {
    build(forms: InferForms<TParent>): JSX.Element
}