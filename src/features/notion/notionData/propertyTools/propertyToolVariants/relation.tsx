
import { PageData } from "~/structure/config/pageConfig"
import { SimpleConfigTool } from "../toolTemplates/configTool"
import { ValueTool } from "../toolTemplates/valueTool"
import { InferOptions } from "~/tools/utils"
import { PropertyTool } from "../toolTemplates/propertyTool"

interface Relation {
    database_id: string
    synced?: {
        property_id: string
    }
}
class RelationConfigTool extends SimpleConfigTool<Relation> {
    create = (database: string, property?: string) => ({ database_id: database, synced: { property_id: property } })

    extract = (data) => ({ database_id: data.database_id, synced: { property_id: data?.synced_property_id } })

    format = (config: Relation) => ({ database_id: config.database_id, synced_property_id: config?.synced.property_id })

    compare(preset: Relation, current: Relation) {
        if (preset.database_id != current.database_id) {
            return { config: "Related Database", preset: preset.database_id, current: current.database_id }
        } else if (preset.synced && current.synced && preset.synced.property_id != current.synced.property_id) {
            return { config: "Synced Property", preset: preset.synced.property_id, current: current.synced.property_id }
        } else if (!!preset.synced != !!current.synced) {
            if (preset.synced) {
                return { config: "Separate Direction", preset: "Separate", current: "Single" }
            } else {
                return { config: "Separate Direction", preset: "Single", current: "Separate" }
            }
        }
        return true
    }
}

class RelationValueTool extends ValueTool<string[]> {
    create = <T extends PageData[]>(pages: T, names: InferOptions<T, "name">[]) => names.map((name) => pages.find((page) => page.name == name).id)
    extract = (data) => data.map((item) => item.id)
    format = (value: string[]) => value.map((id) => ({ id }))
}

export class RelationTool extends PropertyTool {
    label = "Relation"
    config = new RelationConfigTool()
    value = new RelationValueTool()
}
