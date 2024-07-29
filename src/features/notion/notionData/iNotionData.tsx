import { PropertyType } from "./notionConstants";

export interface NotionData {
    name: string;
    id: string;
}
export type ParentType = "workspace" | "page" | "database" | "block"
export interface WorkspaceParent { type: "workspace" }
export interface PageParent { type: "page", id: string }
export interface DatabaseParent { type: "database", id: string }
export interface BlockParent { type: "block", id: string }
export type ParentData<T extends ParentType = ParentType> = Extract<WorkspaceParent | PageParent | DatabaseParent | BlockParent, { type: T }>
export type ParentOfPage = ParentData<"workspace" | "page" | "database">
export type ParentOfDatabase = ParentData<"workspace" | "page">

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
    parent: ParentOfDatabase
    properties: PropertyData[];
    url: string
}

export interface PageData extends NotionData {
    url: string
    parent: ParentOfPage
}
