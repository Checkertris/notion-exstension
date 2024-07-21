import { SimpleConfigTool } from "./tools/configTool";
import { PropertyTool } from "./tools/propertyTool";
import { ReadonlyValueTool } from "./tools/valueTool";

interface CDetails {
    expression: string
}

type VDetails = boolean | number | string | Date

class FormulaConfig extends SimpleConfigTool<CDetails> {
    create = (expression: string) => ({ expression })

    extract = (data) => ({ expression: data.expression })

    format = (config: CDetails) => config

    compare(preset: CDetails, current: CDetails) {
        if (preset.expression == current.expression) return true
        return { config: "Formula", preset: preset.expression, current: current.expression }
    }
}

class FormulaValue extends ReadonlyValueTool<VDetails> {
    extract(data): VDetails {
        var value = data[data.type]
        if (data.type == "date") return new Date(value)
        return value
    }
}

export class Formula extends PropertyTool {
    label = "Formula"
    config = new FormulaConfig()
    value = new FormulaValue()
}

