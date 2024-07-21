import { DataTool } from "./tools/configTool";
import { SelectColor } from "../enums"
import { findDifference, InferOptions } from "~/utils";
import { ValueTool } from "./tools/valueTool";
import { PropertyTool } from "./tools/propertyTool";

interface NewOption {
    name: string
    color: SelectColor
}

interface Option {
    id: string
    name: string
    color: SelectColor
}

interface CDetails {
    options: Option[]
}

interface NewCDetails {
    options: NewOption[]
}

interface VDetails {
    id: string
}

class SelectConfig extends DataTool<NewCDetails, CDetails> {

    create = (options: NewOption[]) => ({ options })

    extract(data: any): CDetails {
        var options = data.options.map((option) => ({ name: option.name, id: option.id, color: SelectColor[option.color as keyof typeof SelectColor] }))
        return { options }
    }
    format(config: NewCDetails) {
        var options = config.options.map((option) => ({ name: option.name, color: SelectColor[option.color] }))
        return { options }
    }

    compareNew(old: CDetails, _new: NewCDetails) {
        var diff = findDifference(old.options, _new.options, "name")
        if (diff) return { config: "Select Options", preset: diff[0], current: diff[1] }
        return true
    }

    compareUpdate(old: CDetails, _new: CDetails) {
        var diff = findDifference(old.options, _new.options, "id")
        if (diff) return { config: "Select Options", preset: diff[0], current: diff[1] }
        return true
    }
}

class SelectValue extends ValueTool<VDetails> {
    create<T extends CDetails>(config: T, name: InferOptions<T["options"], "name">) {
        var id = config.options.find((option) => option.name == name).id
        return { id }
    }
    extract = (data: any) => ({ id: data.id })
    format = (value: VDetails) => value
}

class MultiSelectValue extends ValueTool<VDetails[]> {
    create<T extends CDetails>(config: T, names: InferOptions<T["options"], "name">[]) {
        return names.map((name) => {
            var id = config.options.find((option) => option.name == name).id
            return { id }
        })
    }
    extract = (data: any) => data.map((item) => ({ id: item.id }))
    format = (data: VDetails[]) => data
}

export class Select extends PropertyTool {
    label = "Select"
    config = new SelectConfig()
    value = new SelectValue()
}

export class MultiSelect extends PropertyTool {
    label = "Multi-select"
    config = new SelectConfig()
    value = new MultiSelectValue()
}

