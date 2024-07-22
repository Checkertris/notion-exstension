import { RollupFunction } from "../../notionConstants"
import { SimpleConfigTool } from "../toolTemplates/configTool"
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ReadonlyValueTool } from "../toolTemplates/valueTool"

interface Rollup {
    relatoion_id: string
    property_id: string
    function?: RollupFunction
}

type RollupValue = number | Date | any[]

class RollupConfigTool extends SimpleConfigTool<Rollup> {
    create = (relation: string, property: string, func?: RollupFunction) => ({ relatoion_id: relation, property_id: property, function: func })

    extract = (data) => ({ relatoion_id: data.relation_property_id, property_id: data.rollup_property_id, function: RollupFunction[data?.function as keyof typeof RollupFunction] })

    format = (config: Rollup) => ({ relation_property_id: config.relatoion_id, rollup_property_id: config.property_id })

    compare(old: Rollup, _new: Rollup) {
        if (old.relatoion_id != _new.relatoion_id) return { config: "Relation", preset: old.relatoion_id, current: _new.relatoion_id }
        if (old.property_id != _new.property_id) return { config: "Rollup Property", preset: old.property_id, current: _new.property_id }
        if (old?.function != _new.function) return { config: "Rollup Function", preset: old?.function, current: _new?.function }
        return true
    }
}

class RollupValueTool extends ReadonlyValueTool<RollupValue> {
    extract(data) {
        var value = data[data.type]
        if (data.type == "date") return new Date(value)
        return value
    }
}

export class RollupTool extends PropertyTool {
    label = "Rollup"
    config = new RollupConfigTool()
    value = new RollupValueTool()
}