import { ArrayParentBuilder } from "~/features/builder";
import { KeyByValue, getFromKey, isExtends } from "~/utils";
import { ParentNodeBuilder } from "./parentNodeBuilder";
import { UseFormReturn } from "../form";

type InferForms<T extends ParentNodeBuilder<any>> = T extends ParentNodeBuilder<infer A> ? A : never;
export type InferFormKeys<T extends ParentNodeBuilder<any>, TForm> = InferForms<T> extends UseFormReturn ? never : KeyByValue<InferForms<T>, TForm>

export interface ChildNodeBuilder<TParent extends ParentNodeBuilder<any>> {
  build(name: string, forms: InferForms<TParent>): JSX.Element
}

export abstract class GroupNodeBuilder<TParent extends ParentNodeBuilder<any>, TChildren extends ChildNodeBuilder<TParent>> extends ArrayParentBuilder<[InferForms<TParent>], TChildren> implements ChildNodeBuilder<TParent> {

  abstract buildContent(name: string, children: JSX.Element[]): JSX.Element

  build(name: string, forms: InferForms<TParent>): JSX.Element {
    return this.buildContent(name, this.buildChildren(forms))
  }
}

export abstract class BridgeNodeBuilder<TParent extends ParentNodeBuilder<any>, TChild extends ChildNodeBuilder<TParent>> implements ChildNodeBuilder<TParent> {
  private child: TChild
  private child_name: string

  abstract buildContent(name: string, child: JSX.Element): JSX.Element

  set(item: { [name: string]: TChild }) {
    this.child = Object.values(item)[0]
    this.child_name = Object.keys(item)[0]
  }

  build(name: string, forms: InferForms<TParent>): JSX.Element {
    var child = this.child.build(this.child_name, forms)
    return this.buildContent(name, child)
  }
}

export abstract class InputNodeBuilder<TParent extends ParentNodeBuilder<any>, T extends UseFormReturn> implements ChildNodeBuilder<TParent> {
  key: InferFormKeys<TParent, T>

  constructor(key: InferFormKeys<TParent, T>) {
    this.key = key;
  }

  abstract buildContent(form: T): JSX.Element;

  build(name: string, forms: InferForms<TParent>): JSX.Element {
    if (isExtends<UseFormReturn>(forms)) return this.buildContent(forms)
    return this.buildContent(getFromKey(forms, this.key))
  }
}



