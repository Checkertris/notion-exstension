import { NullConfigTool } from "./tools/configTool";
import { PropertyTool } from "./tools/propertyTool";
import { ValueTool } from "./tools/valueTool";

interface File {
    name: string
    url: string
}

class FilesValue extends ValueTool<File[]> {
    create = (files: File[]) => files

    extract = (data) => data.map((file) => ({ name: file.name, url: file.external.url }))

    format = (value: File[]) => value.map((file) => ({ name: file.name, external: { url: file.url } }))
}

export class Files extends PropertyTool {
    label = "Files & Media"
    config = new NullConfigTool()
    value = new FilesValue()
}