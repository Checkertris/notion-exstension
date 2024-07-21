import { UseFormReturnList } from "../../formList";
import { ContextList } from "~/hooks";
import { BuilderProps, ChildrenManager } from "~/features/builder";
import { AnyUseFormReturn } from "~/features/formList";
import { KeyByValue, getFromKey } from "~/utils";
import { InferUseFormReturnList } from "./types";

export abstract class PageNodeBuilder<T extends UseFormReturnList<any>> {
  abstract build(context: ContextList<T>): JSX.Element;
}

export abstract class NodeBuilder<T extends PageNodeBuilder<any>> {
  abstract build(props?): JSX.Element
}

export abstract class InputNodeBuilder<TPage extends PageNodeBuilder<any>, T extends AnyUseFormReturn<any>> extends NodeBuilder<TPage> {
  private key: KeyByValue<InferUseFormReturnList<TPage>, T>;

  constructor(key: KeyByValue<InferUseFormReturnList<TPage>, T>) {
    super()
    this.key = key;
  }

  abstract buildContent(name: string, form: T): JSX.Element;

  build(props: { name: string; context: ContextList<InferUseFormReturnList<TPage>>; }): JSX.Element {
    var form: T = getFromKey(props.context, this.key as any);
    return this.buildContent(props.name, form)
  }
}

export abstract class BridgeNodeBuilder<TPage extends PageNodeBuilder<any>, TChildren extends NodeBuilder<TPage>> {
  private children = new ChildrenManager<TChildren>()

  abstract buildContent(name: string, children: JSX.Element[]): JSX.Element

  build(props: { name: string } & BuilderProps<TChildren>): JSX.Element {
    var children = this.children.build(props)
    return this.buildContent(props.name, children)
  }
}



