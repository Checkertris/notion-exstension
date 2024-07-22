import { NullConfigTool } from "../toolTemplates/configTool"
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ValueTool } from "../toolTemplates/valueTool"

interface DateValue { start: Date, end?: Date }

class DateValueTool extends ValueTool<DateValue> {
    create = (start: Date, end?: Date) => ({ start, end })

    extract = (data: any) => ({ start: new Date(data.start), end: new Date(data?.end) })

    format = (value: DateValue) => ({ start: value.start.toString(), end: value?.end.toString() })
}

export class DateTool extends PropertyTool {
    label = "Date"
    config = new NullConfigTool()
    value = new DateValueTool()
}



