import { UseFormReturnList } from "../../formList";
import { BuilderProps, ChildrenManager } from "~/features/builder";
import { AnyUseFormReturn } from "~/features/formList";
import { KeyByValue, getFromKey } from "~/utils";
import { InferUseFormReturnList } from "./types";

export abstract class PageNodeBuilder<T extends UseFormReturnList<any>> {
  abstract build(forms: T): JSX.Element;
}

export abstract class NodeBuilder<TPage extends PageNodeBuilder<any>> {
  abstract build(props: { name: string }): JSX.Element
}

export abstract class InputNodeBuilder<TPage extends PageNodeBuilder<any>, T extends AnyUseFormReturn<any>> extends NodeBuilder<TPage> {
  private key: KeyByValue<InferUseFormReturnList<TPage>, T>;

  constructor(key: KeyByValue<InferUseFormReturnList<TPage>, T>) {
    super()
    this.key = key;
  }

  abstract buildContent(props: { name: string, form: T }): JSX.Element;

  build(props: { name: string, form: InferUseFormReturnList<TPage> }): JSX.Element {
    var form: T = getFromKey(props.form, this.key);
    return this.buildContent({ name: props.name, form })
  }
}

export abstract class BridgeNodeBuilder<TPage extends PageNodeBuilder<any>, TChildren extends NodeBuilder<TPage>> {
  private children = new ChildrenManager<TChildren>()

  abstract buildContent(props: { name: string, children: JSX.Element[] }): JSX.Element

  build(props: { name: string } & BuilderProps<TChildren>): JSX.Element {
    var children = this.children.build(props)
    return this.buildContent({ name: props.name, children })
  }
}



