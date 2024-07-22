import { ConfigTool } from "./configTool"
import { ValueToolBase } from "./valueTool"

export abstract class PropertyTool {
    abstract config: ConfigTool<any>
    abstract value: ValueToolBase<any>
    abstract label: string
}