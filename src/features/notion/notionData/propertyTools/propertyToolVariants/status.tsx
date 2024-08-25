import { SelectColor } from "../../notionConstants";
import { ValueTool } from "../toolTemplates/valueTool";
import { Comparison, ReadonlyConfigTool } from "../toolTemplates/configTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { findDifference, InferOptions } from "~/tools/utils";
import { cn } from "~/tools/variantManager";

interface Option {
    name: string
    id: string
    color: SelectColor
}

interface Status {
    options: Option[]
    groups: { id: string, name: string, color: SelectColor, option_ids: string[] }[]
}

interface StatusValue {
    id: string
}

function getGroupOptions<S extends Status>(status: S, id: InferOptions<S["groups"], "id">): Option[] {
    var group = status.groups.find((group) => group.id == id)
    return group.option_ids.map((id) => {
        var option = status.options.find((option) => option.id == id)
        if (!option) throw ReferenceError(cn("cannot find option of id", id, "in options"))
        return option
    })
}

class StatusConfigTool extends ReadonlyConfigTool<Status> {
    extract(data: any): Status {
        var options = data.options.map((option) => ({ name: option.name, id: option.id, color: SelectColor[option.color] }))
        var groups = data.groups.map((group) => ({ id: group.id, name: group.name, color: SelectColor[group.color], option_ids: group.option_ids }))
        return { options, groups }
    }
    compareOld(preset: Status, current: Status): true | Comparison<any> {
        var optionDiff = findDifference(preset.options, current.options, "id")
        if (optionDiff) return { config: "Options", preset: optionDiff[0], current: optionDiff[1] }
        var groupDiff = findDifference(preset.groups, current.groups, "id")
        if (groupDiff) return { config: "Groups", preset: groupDiff[0], current: groupDiff[1] }
        preset.groups.forEach((group, index) => {
            var presetOptions = getGroupOptions(preset, group.id)
            var currentOptions = getGroupOptions(current, current.groups[index].id)
            var diff = findDifference(presetOptions, currentOptions, "id")
            if (diff) return { config: cn(group.name, "Options"), preset: diff[0], current: diff[1] }
        })
        return true
    }
}

class StatusValueTool extends ValueTool<StatusValue> {
    create = (id: string) => ({ id })

    extract = (data) => ({ id: data.id })

    format = (value: StatusValue) => value
}

export class StatusTool extends PropertyTool {
    label = "Status"
    config = new StatusConfigTool()
    value = new StatusValueTool()
}