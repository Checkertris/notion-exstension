import { ConfigTool } from "./toolTemplates/configTool";
import { ValueToolBase } from "./toolTemplates/valueTool";
import { PropertyType } from "../notionConstants";
import { CheckboxTool, EmailTool, PhoneTool, UrlTool } from "./propertyToolVariants/primitives";
import { CreatedTimeTool, LastEditedTimeTool } from "./propertyToolVariants/time";
import { DateTool } from "./propertyToolVariants/date";
import { FormulaTool } from "./propertyToolVariants/formula";
import { SelectTool, MultiSelectTool } from "./propertyToolVariants/select";
import { NumberTool } from "./propertyToolVariants/number";
import { RelationTool } from "./propertyToolVariants/relation";
import { RollupTool } from "./propertyToolVariants/rollup";
import { Files } from "./propertyToolVariants/files";
import { CreatedByTool, LastEditedByTool, PeopleTool } from "./propertyToolVariants/user";
import { TextTool, TitleTool } from "./propertyToolVariants/richText";
import { StatusTool } from "./propertyToolVariants/status";
import { isExtends } from "~/utils";
import { ValueTool } from "./toolTemplates/valueTool";

type Tool<T extends PropertyType> = typeof allTools[T]

const allTools = {
    [PropertyType.checkbox]: new CheckboxTool(),
    [PropertyType.created_time]: new CreatedTimeTool(),
    [PropertyType.date]: new DateTool(),
    [PropertyType.email]: new EmailTool(),
    [PropertyType.formula]: new FormulaTool(),
    [PropertyType.last_edited_time]: new LastEditedTimeTool(),
    [PropertyType.number]: new NumberTool(),
    [PropertyType.select]: new SelectTool(),
    [PropertyType.multi_select]: new MultiSelectTool(),
    [PropertyType.phone_number]: new PhoneTool(),
    [PropertyType.url]: new UrlTool(),
    [PropertyType.relation]: new RelationTool(),
    [PropertyType.rollup]: new RollupTool(),
    [PropertyType.files]: new Files(),
    [PropertyType.people]: new PeopleTool(),
    [PropertyType.created_by]: new CreatedByTool(),
    [PropertyType.last_edited_by]: new LastEditedByTool(),
    [PropertyType.rich_text]: new TextTool(),
    [PropertyType.title]: new TitleTool(),
    [PropertyType.status]: new StatusTool()
}
export type Property<T extends PropertyType> = Tool<T>["config"] extends ConfigTool<any, infer A> ? A : never

export type PropertyValue<T extends PropertyType> = Tool<T>["value"] extends ValueToolBase<infer A> ? A : never

export function configTool<T extends PropertyType>(key: T) {
    return allTools[key].config as Tool<T>["config"]
}

export function propertyLabel<T extends PropertyType>(key: T) {
    return allTools[key].label as Tool<T>["label"]
}

export function valueTool<T extends PropertyType>(key: T) {
    return allTools[key].value as Tool<T>["value"]
}

export function notReadonly<T>(tool: ValueToolBase<T>) {
    return isExtends<ValueTool<T>>(tool)
}
