import { ParentBuilder } from "~/features/builder";
import { KeyByValue, getFromKey } from "~/utils";
import { ParentNodeBuilder } from "./parentNodeBuilder";
import { UseFormReturn } from "../iForms";

type InferForms<T extends ParentNodeBuilder<any>> = T extends ParentNodeBuilder<infer A> ? A : never;

export interface ChildNodeBuilder<TPage extends ParentNodeBuilder<any>> {
  build(name: string, forms: InferForms<TPage>): JSX.Element
}

export abstract class GroupNodeBuilder<TPage extends ParentNodeBuilder<any>, TChildren extends ChildNodeBuilder<TPage>> extends ParentBuilder<[InferForms<TPage>], TChildren> implements ChildNodeBuilder<TPage> {

  abstract buildContent(name: string, children: JSX.Element[]): JSX.Element

  build(name: string, forms: InferForms<TPage>): JSX.Element {
    return this.buildContent(name, this.buildChildren(forms))
  }
}

export abstract class BridgeNodeBuilder<TPage extends ParentNodeBuilder<any>, TChild extends ChildNodeBuilder<TPage>> implements ChildNodeBuilder<TPage> {
  private child: TChild
  private child_name: string

  abstract buildContent(name: string, child: JSX.Element): JSX.Element

  add(item: { [name: string]: TChild }) {
    this.child = Object.values(item)[0]
    this.child_name = Object.keys(item)[0]
  }

  build(name: string, forms: InferForms<TPage>): JSX.Element {
    var child = this.child.build(this.child_name, forms)
    return this.buildContent(name, child)
  }
}

export abstract class InputNodeBuilder<TPage extends ParentNodeBuilder<any>, T extends UseFormReturn<any>> implements ChildNodeBuilder<TPage> {
  private key: KeyByValue<InferForms<TPage>, T>;

  constructor(key: KeyByValue<InferForms<TPage>, T>) {
    this.key = key;
  }

  abstract buildContent(form: T): JSX.Element;

  build(name: string, forms: InferForms<TPage>): JSX.Element {
    return this.buildContent(getFromKey(forms, this.key))
  }
}



