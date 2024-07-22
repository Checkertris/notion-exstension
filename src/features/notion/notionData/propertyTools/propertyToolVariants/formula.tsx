import { SimpleConfigTool } from "../toolTemplates/configTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ReadonlyValueTool } from "../toolTemplates/valueTool";

interface Formula {
    expression: string
}

type FormulaValue = boolean | number | string | Date

class FormulaConfigTool extends SimpleConfigTool<Formula> {
    create = (expression: string) => ({ expression })

    extract = (data) => ({ expression: data.expression })

    format = (config: Formula) => config

    compare(preset: Formula, current: Formula) {
        if (preset.expression == current.expression) return true
        return { config: "Formula", preset: preset.expression, current: current.expression }
    }
}

class FormulaValueTool extends ReadonlyValueTool<FormulaValue> {
    extract(data): FormulaValue {
        var value = data[data.type]
        if (data.type == "date") return new Date(value)
        return value
    }
}

export class FormulaTool extends PropertyTool {
    label = "Formula"
    config = new FormulaConfigTool()
    value = new FormulaValueTool()
}

