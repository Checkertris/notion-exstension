import { ChildNodeBuilder } from "../iFormNodeBuilder";

export class CustomBuilder implements ChildNodeBuilder<any> {
  component: JSX.Element;

  constructor(custom: JSX.Element) {
    this.component = custom;
  }
  build(): JSX.Element {
    return this.component;
  }
}
