import { UseFormReturn } from "../form";
import { ArrayParentBuilder } from "~/features/builder";
import { ChildNodeBuilder } from "./childNodeBuilder";
import FlexibleRecord from "~/utils/flexibleRecord";

export interface ParentNodeBuilder<T extends FlexibleRecord.Type<UseFormReturn>> {
    build(forms: T): JSX.Element;
}

export abstract class SimpleParentNodeBuilder<T extends FlexibleRecord.Type<UseFormReturn>, TChildren extends ChildNodeBuilder<ParentNodeBuilder<T>>> extends ArrayParentBuilder<[T], TChildren> implements ParentNodeBuilder<T> {

    abstract buildContent(children: JSX.Element[]): JSX.Element

    build(forms: T): JSX.Element {
        return this.buildContent(this.buildChildren(forms))
    }
}