import { NullConfigTool } from "../toolTemplates/configTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ReadonlyValueTool } from "../toolTemplates/valueTool";

class DateValueTool extends ReadonlyValueTool<Date> {
    extract = (data) => new Date(data)
}

export class LastEditedTimeTool extends PropertyTool {
    label = "Last edited time"
    config = new NullConfigTool()
    value = new DateValueTool()
}


export class CreatedTimeTool extends PropertyTool {
    label = "Created time"
    config = new NullConfigTool()
    value = new DateValueTool()
}

