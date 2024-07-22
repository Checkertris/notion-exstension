import { NullConfigTool } from "../toolTemplates/configTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ReadonlyValueTool, ValueTool } from "../toolTemplates/valueTool";

interface User {
    id: string
}

class PeopleValueTool extends ValueTool<User[]> {
    create = (users: User[]) => users

    extract = (data) => data.map((user) => ({ id: user.id }))

    format = (value: User[]) => value.map((user) => ({ object: "user", id: user.id }))
}

class ReadonlyUserValueTool extends ReadonlyValueTool<User> {
    extract = (data) => ({ id: data.id })
}

export class PeopleTool extends PropertyTool {
    label = "People"
    config = new NullConfigTool()
    value = new PeopleValueTool()
}

export class CreatedByTool extends PropertyTool {
    label = "Created by"
    config = new NullConfigTool()
    value = new ReadonlyUserValueTool()
}

export class LastEditedByTool extends PropertyTool {
    label = "Last edited by"
    config = new NullConfigTool()
    value = new ReadonlyUserValueTool()
}