import { NullConfigTool } from "./tools/configTool"
import { PropertyTool } from "./tools/propertyTool"
import { PrimitiveValueTool } from "./tools/valueTool"

export class Checkbox extends PropertyTool {
    label = "Checkbox"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<boolean>()
}

export class Url extends PropertyTool {
    label = "Url"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<string>()
}

export class Phone extends PropertyTool {
    label = "Phone number"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<string>()
}

export class Email extends PropertyTool {
    label = "Email"
    config = new NullConfigTool()
    value = new PrimitiveValueTool<string>()
}

