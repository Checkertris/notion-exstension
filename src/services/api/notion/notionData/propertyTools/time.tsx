import { NullConfig } from "./tools/configTool";
import { PropertyTool } from "./tools/propertyTool";
import { ReadonlyValueTool } from "./tools/valueTool";

class DateValue extends ReadonlyValueTool<Date> {
    extract = (data) => new Date(data)
}

export class LastEditedTime extends PropertyTool {
    label = "Last edited time"
    config = new NullConfig()
    value = new DateValue()
}


export class CreatedTime extends PropertyTool {
    label = "Created time"
    config = new NullConfig()
    value = new DateValue()
}

