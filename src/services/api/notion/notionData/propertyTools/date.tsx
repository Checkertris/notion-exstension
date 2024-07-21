import { NullConfigTool } from "./tools/configTool"
import { PropertyTool } from "./tools/propertyTool";
import { ValueTool } from "./tools/valueTool"

interface VDetails { start: Date, end?: Date }

class DateValue extends ValueTool<VDetails> {
    create = (start: Date, end?: Date) => ({ start, end })

    extract = (data: any) => ({ start: new Date(data.start), end: new Date(data?.end) })

    format = (value: VDetails) => ({ start: value.start.toString(), end: value?.end.toString() })
}

export class _Date extends PropertyTool {
    label = "Date"
    config = new NullConfigTool()
    value = new DateValue()
}



