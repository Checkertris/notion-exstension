import { DefaultFieldsetItemBuilder } from "./defaultFieldsetItemBuilder";

export class OutputItemBuilder extends DefaultFieldsetItemBuilder<any> {
  output: JSX.Element;

  constructor(output: JSX.Element) {
    super();
    this.output = output;
  }

  buildBody(): JSX.Element {
    return this.output;
  }
}
