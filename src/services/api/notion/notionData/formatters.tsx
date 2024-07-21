import { isExtends, reduceObject } from "~/utils"
import { PropertyType } from "./enums"
import { configTool, valueTool } from "./propertyTools/tools/allPropertyTools"
import { PropertyData, NewPropertyData, PropertyValueData, NewPropertyValueData, ParentData, DatabaseData } from "./iNotionData"
import { FormattableValueTool } from "./propertyTools/tools/valueTool"

export function formatParent(parent: ParentData) {
    switch (parent.type) {
        case "database":
            return { type: "database_id", database_id: parent.id }
        case "page":
            return { type: "page_id", page_id: parent.id }
        case "workspace":
            return { type: "workspace", workspace: true }
        case "block":
            return { type: "block_id", block_id: parent.id }
    }
}

export function formatProperties(properties: PropertyData[] | NewPropertyData[]) {
    return reduceObject(properties, {
        key: (property) => {
            if (isExtends<PropertyData>(property)) return property.id
            return property.name
        }, value: (property) => ({ [property.type]: configTool(property.type).format(property.details) })
    })
}

export function formatPropertyValues(properties: NewPropertyValueData[] | PropertyValueData[]) {
    return reduceObject(properties, {
        filter: (property) => isExtends<FormattableValueTool<any>>(valueTool(property.type)),
        key: (property) => {
            if (isExtends<PropertyValueData>(property)) return property.id
            return property.name
        }, value: (property) => {
            var tool = valueTool(property.type)
            if (isExtends<FormattableValueTool<any>>(tool)) {
                return { [PropertyType[property.type]]: tool.format(property.details) }
            }
        }
    })
}

export function formatDatabase(database: DatabaseData) {
    return {
        parent: formatParent(database.parent),
        title: [{ text: { content: database.name } }],
        properties: formatProperties(database.properties)
    }
}
