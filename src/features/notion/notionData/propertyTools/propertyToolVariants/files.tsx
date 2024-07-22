import { NullConfigTool } from "../toolTemplates/configTool";
import { PropertyTool } from "../toolTemplates/propertyTool"
import { ValueTool } from "../toolTemplates/valueTool";

interface File {
    name: string
    url: string
}

class FilesValueTool extends ValueTool<File[]> {
    create = (files: File[]) => files

    extract = (data) => data.map((file) => ({ name: file.name, url: file.external.url }))

    format = (value: File[]) => value.map((file) => ({ name: file.name, external: { url: file.url } }))
}

export class Files extends PropertyTool {
    label = "Files & Media"
    config = new NullConfigTool()
    value = new FilesValueTool()
}