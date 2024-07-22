import { SelectColor } from "../../notionConstants"
import { findDifference, InferKeys } from "~/utils";
import { ValueTool } from "../toolTemplates/valueTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ConfigTool } from "../toolTemplates/configTool";

interface NewOption {
    name: string
    color: SelectColor
}

interface Option {
    id: string
    name: string
    color: SelectColor
}

interface Select {
    options: Option[]
}

interface NewSelect {
    options: NewOption[]
}

interface SelectValue {
    id: string
}

class SelectConfigTool extends ConfigTool<NewSelect, Select> {

    create = (options: NewOption[]) => ({ options })

    extract(data: any): Select {
        var options = data.options.map((option) => ({ name: option.name, id: option.id, color: SelectColor[option.color as keyof typeof SelectColor] }))
        return { options }
    }
    format(config: NewSelect) {
        var options = config.options.map((option) => ({ name: option.name, color: SelectColor[option.color] }))
        return { options }
    }

    compareNew(old: Select, _new: NewSelect) {
        var diff = findDifference(old.options, _new.options, "name")
        if (diff) return { config: "Select Options", preset: diff[0], current: diff[1] }
        return true
    }

    compareOld(old: Select, _new: Select) {
        var diff = findDifference(old.options, _new.options, "id")
        if (diff) return { config: "Select Options", preset: diff[0], current: diff[1] }
        return true
    }
}

class SelectValueTool extends ValueTool<SelectValue> {
    create<T extends Select>(config: T, name: InferKeys<T["options"], "name">) {
        var id = config.options.find((option) => option.name == name).id
        return { id }
    }
    extract = (data: any) => ({ id: data.id })
    format = (value: SelectValue) => value
}

class MultiSelectValueTool extends ValueTool<SelectValue[]> {
    create<T extends Select>(config: T, names: InferKeys<T["options"], "name">[]) {
        return names.map((name) => {
            var id = config.options.find((option) => option.name == name).id
            return { id }
        })
    }
    extract = (data: any) => data.map((item) => ({ id: item.id }))
    format = (data: SelectValue[]) => data
}

export class SelectTool extends PropertyTool {
    label = "Select"
    config = new SelectConfigTool()
    value = new SelectValueTool()
}

export class MultiSelectTool extends PropertyTool {
    label = "Multi-select"
    config = new SelectConfigTool()
    value = new MultiSelectValueTool()
}

