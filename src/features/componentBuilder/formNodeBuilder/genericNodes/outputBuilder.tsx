
import { QuickOutput } from "~/components/quickComponents";
import { NodeBuilder } from "../nodeBuilders";

export class OutputBuilder extends NodeBuilder<any> {
  output: JSX.Element;

  constructor(output: JSX.Element) {
    super()
    this.output = output;
  }

  build(): JSX.Element {
    return <QuickOutput>{this.output}</QuickOutput>;
  }
}
