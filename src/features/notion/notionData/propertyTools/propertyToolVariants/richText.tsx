import { NullConfigTool } from "../toolTemplates/configTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ValueTool } from "../toolTemplates/valueTool";

class SimpleRichTextValueTool extends ValueTool<string> {
    create = (text: string) => text

    extract = (data) => data[0].plain_text

    format = (value: string) => ([{ text: { contenxt: value } }])
}

export class TextTool extends PropertyTool {
    label = "Text"
    config = new NullConfigTool()
    value = new SimpleRichTextValueTool()
}

export class TitleTool extends PropertyTool {
    label = "Title"
    config = new NullConfigTool()
    value = new SimpleRichTextValueTool()
}