import { ChildNodeBuilder } from "../childNodeBuilder";

export class CustomBuilder extends ChildNodeBuilder<any> {
  component: JSX.Element;

  constructor(custom: JSX.Element) {
    super()
    this.component = custom;
  }
  build(): JSX.Element {
    return this.component;
  }
}
