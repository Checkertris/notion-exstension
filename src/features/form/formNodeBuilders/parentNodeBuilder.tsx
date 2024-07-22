import { UseFormReturn } from "../iForms";
import { ParentBuilder } from "../../builder/parentBuilder";
import { ChildNodeBuilder } from "./childNodeBuilder";

export interface ParentNodeBuilder<T extends Record<string, UseFormReturn>> {
    build(name: string, forms: T): JSX.Element;
}

export abstract class SimpleParentNodeBuilder<T extends Record<string, UseFormReturn>, TChildren extends ChildNodeBuilder<ParentNodeBuilder<T>>> extends ParentBuilder<[T], TChildren> implements ParentNodeBuilder<T> {

    abstract buildContent(children: JSX.Element[]): JSX.Element

    build(name: string, forms: T): JSX.Element {
        return this.buildContent(this.buildChildren(forms))
    }
}