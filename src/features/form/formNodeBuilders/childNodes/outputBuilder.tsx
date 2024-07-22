import { QuickOutput } from "~/components/quickComponents";
import { ChildNodeBuilder } from "../childNodeBuilder";

export class OutputBuilder extends ChildNodeBuilder<any> {
  output: JSX.Element;

  constructor(output: JSX.Element) {
    super()
    this.output = output;
  }

  build(): JSX.Element {
    return <QuickOutput>{this.output}</QuickOutput>;
  }
}
