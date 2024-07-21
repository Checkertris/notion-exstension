import { NullConfigTool } from "./tools/configTool";
import { PropertyTool } from "./tools/propertyTool";
import { ReadonlyValueTool, ValueTool } from "./tools/valueTool";

interface User {
    id: string
}

class PeopleValue extends ValueTool<User[]> {
    create = (users: User[]) => users

    extract = (data) => data.map((user) => ({ id: user.id }))

    format = (value: User[]) => value.map((user) => ({ object: "user", id: user.id }))
}

class ReadonlyUserValue extends ReadonlyValueTool<User> {
    extract = (data) => ({ id: data.id })
}

export class People extends PropertyTool {
    label = "People"
    config = new NullConfigTool()
    value = new PeopleValue()
}

export class CreatedBy extends PropertyTool {
    label = "Created by"
    config = new NullConfigTool()
    value = new ReadonlyUserValue()
}

export class LastEditedBy extends PropertyTool {
    label = "Last edited by"
    config = new NullConfigTool()
    value = new ReadonlyUserValue()
}