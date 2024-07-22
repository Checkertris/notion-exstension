import { PropertyType } from "./notionConstants";

export interface NotionData {
    name: string;
    id: string;
}

export interface WorkspaceParent { type: "workspace" }
export interface PageParent { type: "page", id: string }
export interface DatabaseParent { type: "database", id: string }
export interface BlockParent { type: "block", id: string }
export type ParentData = WorkspaceParent | PageParent | DatabaseParent | BlockParent

export interface SimplePropertyData extends NotionData {
    type: PropertyType
}

export interface PropertyData extends SimplePropertyData {
    description?: string
    details: unknown
}

export type NewPropertyData = Omit<PropertyData, "id">

export interface PropertyValueData extends NotionData {
    type: PropertyType
    details: unknown
}

export type NewPropertyValueData = Omit<PropertyValueData, "id">

export interface DatabaseData extends NotionData {
    parent: ParentData
    properties: PropertyData[];
    url: string
}

export interface PageData extends NotionData {
    url: string
    parent: WorkspaceParent | PageParent
}
