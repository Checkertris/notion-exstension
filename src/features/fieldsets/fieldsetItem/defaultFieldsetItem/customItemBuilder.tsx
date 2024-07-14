import { DefaultFieldsetItemBuilder } from "./defaultFieldsetItemBuilder";

export class CustomItemBuilder extends DefaultFieldsetItemBuilder<any> {
  child: JSX.Element;

  constructor(child: JSX.Element) {
    super();
    this.child = child;
  }

  buildBody(): JSX.Element {
    return this.child;
  }
}
