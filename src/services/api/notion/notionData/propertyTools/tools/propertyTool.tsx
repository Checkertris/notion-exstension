import { AnyConfigTool } from "./configTool";
import { AnyValueTool } from "./valueTool";

export abstract class PropertyTool {
    abstract config: AnyConfigTool<any>
    abstract value: AnyValueTool<any>
    abstract label: string

}