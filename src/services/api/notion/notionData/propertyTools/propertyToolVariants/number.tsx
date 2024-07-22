import { NumberFormat } from "../../notionConstants"
import { SimpleConfigTool } from "../toolTemplates/configTool"
import { PropertyTool } from "../toolTemplates/propertyTool"
import { PrimitiveValueTool } from "../toolTemplates/valueTool"

interface Number { format: NumberFormat }

class NumberConfigTool extends SimpleConfigTool<Number> {
    create = (format: NumberFormat) => ({ format })

    extract = (data) => ({ format: NumberFormat[data.format as keyof typeof NumberFormat] })

    format = (config: Number) => ({ format: NumberFormat[config.format] })

    compare(preset: Number, current: Number) {
        if (preset.format == current.format) return true
        return { config: "Number Format", preset: preset.format, current: current.format }
    }
}

export class NumberTool extends PropertyTool {
    label = "Number"
    config = new NumberConfigTool()
    value = new PrimitiveValueTool<number>()
}
