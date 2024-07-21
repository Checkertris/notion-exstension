import { NumberFormat } from "../enums"
import { SimpleConfigTool } from "./tools/configTool"
import { PropertyTool } from "./tools/propertyTool"
import { PrimitiveValueTool } from "./tools/valueTool"

interface CDetails { format: NumberFormat }

class NumberConfig extends SimpleConfigTool<CDetails> {
    create = (format: NumberFormat) => ({ format })

    extract = (data) => ({ format: NumberFormat[data.format as keyof typeof NumberFormat] })

    format = (config: CDetails) => ({ format: NumberFormat[config.format] })

    compare(preset: CDetails, current: CDetails) {
        if (preset.format == current.format) return true
        return { config: "Number Format", preset: preset.format, current: current.format }
    }
}

export class Number extends PropertyTool {
    label = "Number"
    config = new NumberConfig()
    value = new PrimitiveValueTool<number>()
}
