import { NodeBuilder } from "../nodeBuilders";

export class CustomBuilder extends NodeBuilder<any> {
  component: JSX.Element;

  constructor(custom: JSX.Element) {
    super()
    this.component = custom;
  }
  build(): JSX.Element {
    return this.component;
  }
}
