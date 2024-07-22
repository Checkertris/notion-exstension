import { NullConfigTool } from "../toolTemplates/configTool"
import { PropertyTool } from "../toolTemplates/propertyTool"
import { PrimitiveValueTool } from "../toolTemplates/valueTool"

export class CheckboxTool extends PropertyTool {
    label = "Checkbox"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<boolean>()
}

export class UrlTool extends PropertyTool {
    label = "Url"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<string>()
}

export class PhoneTool extends PropertyTool {
    label = "Phone number"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<string>()
}

export class EmailTool extends PropertyTool {
    label = "Email"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<string>()
}

