import { DatabaseData, PageData, ParentData, PropertyData, PropertyValueData, SimplePropertyData, WorkspaceParent } from "./iNotionData";
import { PropertyType } from "./notionConstants"
import { isExtends } from "~/tools/utils";
import { configTool, valueTool } from "./propertyTools/index";

export function getType(key: keyof typeof PropertyType): PropertyType {
    var type = PropertyType[key]
    if (!type) throw ReferenceError("no type found in properties")
    return type
}

export function extractParent<T extends ParentData>(data): T {
    var parent
    switch (data.type) {
        case "database_id":
            parent = { type: "database", id: data.database_id }
        case "page_id":
            parent = { type: "page", id: data.page_id }
        case "workspace":
            parent = { type: "workspace" }
        case "block_id":
            parent = { type: "block", id: data.block_id }
    }
    if (!parent) throw ReferenceError("cannot find parent")
    if (isExtends<T>(parent)) return parent
    throw ReferenceError("invalid parent for this object")
}

export function extractSimpleProperties(data): SimplePropertyData[] {
    return Object.values(data).map((item: any) => ({
        name: item.name, id: item.id, type: getType(item.type)
    }))
}

export function extractProperties(data): PropertyData[] {
    return Object.values(data).map((item: any) => ({
        name: item.name, id: item.id, type: getType(item.type), details: configTool(item.type).extract(item[item.type])
    }))
}

export function extractPropertyValues(data): PropertyValueData[] {
    return Object.entries(data).map(([name, item]: [string, any]) => ({
        name: name, id: item.id, type: getType(item.type), details: valueTool(item.type).extract(item[item.type])
    }))
}

export function extractDatabase(data): DatabaseData {
    var name = data.title[0].plain_text;
    if (name) this.data.name = name
    else this.data.name = "Untitled"
    return { name, id: data.id, url: data.url, parent: extractParent(data.parent), properties: extractProperties(data.properties) }
}

export function extractPage(data): PageData {
    var name = data.properties.Title.title[0].plain_text;
    return { name, id: data.id, url: data.url, parent: extractParent(data.parent) }

}