import { SelectColor } from "../enums";
import { ValueTool } from "./tools/valueTool";
import { StaticConfigTool } from "./tools/configTool";
import { PropertyTool } from "./tools/propertyTool";


interface Option<T extends string> {
    name: string
    id: T
    color: SelectColor
}

interface CDetails<T extends string> {
    options: Option<T>[]
    groups: { id: string, name: string, color: SelectColor, option_ids: T[] }[]
}

interface VDetails {
    id: string
}

class StatusConfig extends StaticConfigTool<CDetails<any>> {
    extract(data: any): CDetails<any> {
        var options = data.options.map((option) => ({ name: option.name, id: option.id, color: SelectColor[option.color] }))
        var groups = data.groups.map((group) => ({ id: group.id, name: group.name, color: SelectColor[group.color], option_ids: group.option_ids }))
        return { options, groups }
    }
}

class StatusValue extends ValueTool<VDetails> {
    create = (id: string) => ({ id })

    extract = (data) => ({ id: data.id })

    format = (value: VDetails) => value
}

export class Status extends PropertyTool {
    label = "Status"
    config = new StatusConfig()
    value = new StatusValue()
}