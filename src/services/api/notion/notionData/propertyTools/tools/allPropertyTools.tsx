import { PropertyType } from "../../enums";
import { PropertyTool } from "./propertyTool";
import { Checkbox, Email, Phone, Url } from "../primitives";
import { CreatedTime, LastEditedTime } from "../time";
import { _Date } from "../date";
import { Formula } from "../formula";
import { Select, MultiSelect } from "../select";
import { Number } from "../number";
import { Relation } from "../relation";
import { Rollup } from "../rollup";
import { Files } from "../files";
import { CreatedBy, LastEditedBy, People } from "../user";
import { Text, Title } from "../richText";
import { Status } from "../status";
import { isExtends } from "~/utils";

const allPropertyTools: Record<PropertyType, PropertyTool> = {
    [PropertyType.checkbox]: new Checkbox(),
    [PropertyType.created_time]: new CreatedTime(),
    [PropertyType.date]: new _Date(),
    [PropertyType.email]: new Email(),
    [PropertyType.formula]: new Formula(),
    [PropertyType.last_edited_time]: new LastEditedTime(),
    [PropertyType.number]: new Number(),
    [PropertyType.select]: new Select(),
    [PropertyType.multi_select]: new MultiSelect(),
    [PropertyType.phone_number]: new Phone(),
    [PropertyType.url]: new Url(),
    [PropertyType.relation]: new Relation(),
    [PropertyType.rollup]: new Rollup(),
    [PropertyType.files]: new Files(),
    [PropertyType.people]: new People(),
    [PropertyType.created_by]: new CreatedBy(),
    [PropertyType.last_edited_by]: new LastEditedBy(),
    [PropertyType.rich_text]: new Text(),
    [PropertyType.title]: new Title(),
    [PropertyType.status]: new Status()
}

function getTool(key: PropertyType | keyof typeof PropertyType) {
    if (isExtends<PropertyType>(key)) return allPropertyTools[key]
    return allPropertyTools[PropertyType[key]]
}

export function configTool(key: PropertyType | keyof typeof PropertyType) {
    return getTool(key).config
}

export function getLabel(key: PropertyType | keyof typeof PropertyType) {
    return getTool(key).label
}

export function valueTool(key: PropertyType | keyof typeof PropertyType) {
    return getTool(key).value
} 