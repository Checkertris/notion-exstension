import { KeyByValue, getFromKey } from "~/utils";
import { ParentNodeBuilder, ChildNodeBuilder, InferForms } from "../iFormNodeBuilder";
import { UseFormReturn } from "../../form";

export abstract class InputNodeBuilder<TParent extends ParentNodeBuilder<any>, T extends UseFormReturn> implements ChildNodeBuilder<TParent> {
  key: KeyByValue<InferForms<TParent>, T>

  constructor(key: KeyByValue<InferForms<TParent>, T>) {
    this.key = key;
  }

  getForm = (forms: InferForms<TParent>): T => getFromKey(forms, this.key)

  abstract build(forms: InferForms<TParent>): JSX.Element;
}



