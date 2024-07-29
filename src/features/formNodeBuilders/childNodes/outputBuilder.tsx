import { QuickOutput } from "~/components/quickComponents";
import { ChildNodeBuilder } from "../iFormNodeBuilder";

export class OutputBuilder implements ChildNodeBuilder<any> {
  output: JSX.Element;

  constructor(output: JSX.Element) {
    this.output = output;
  }

  build(): JSX.Element {
    return <QuickOutput>{this.output}</QuickOutput>;
  }
}
