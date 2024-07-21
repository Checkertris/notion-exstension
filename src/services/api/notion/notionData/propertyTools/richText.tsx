import { NullConfigTool } from "./tools/configTool";
import { PropertyTool } from "./tools/propertyTool";
import { ValueTool } from "./tools/valueTool";

class SimpleRichTextValue extends ValueTool<string> {
    create = (text: string) => text

    extract = (data) => data[0].plain_text

    format = (value: string) => ([{ text: { contenxt: value } }])
}

export class Text extends PropertyTool {
    label = "Text"
    config = new NullConfigTool()
    value = new SimpleRichTextValue()
}

export class Title extends PropertyTool {
    label = "Title"
    config = new NullConfigTool()
    value = new SimpleRichTextValue()
}