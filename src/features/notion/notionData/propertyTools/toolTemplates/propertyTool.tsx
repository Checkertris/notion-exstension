import { ConfigTool } from "./configTool";
import { ReadonlyValueTool } from "./valueTool";

export abstract class PropertyTool {
  abstract config: ConfigTool<any>;
  abstract value: ReadonlyValueTool<any>;
  abstract label: string;
}
