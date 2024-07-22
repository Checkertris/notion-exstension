
export interface Comparison<T> {
    config: string
    preset: T
    current: T
}

export abstract class ConfigTool<TNew, T extends TNew = TNew> {
    abstract extract(data): T
    abstract format(config: TNew): any
    abstract create(...args): TNew
    abstract compareNew(preset: T, current: TNew): true | Comparison<any>
    abstract compareOld(preset: T, current: T): true | Comparison<any>
}

export abstract class SimpleConfigTool<T> extends ConfigTool<T> {
    abstract compare(preset: T, current: T): true | Comparison<any>
    compareNew = this.compare
    compareOld = this.compare
}

export abstract class ReadonlyConfigTool<T> extends ConfigTool<{}, T> {
    abstract extract(data): T
    format = () => ({})
    create = () => ({})
    compareNew = () => true as true
}

export class NullConfigTool extends SimpleConfigTool<{}> {
    extract = (data) => ({})
    format = () => ({})
    create = () => ({})
    compare = () => true as true
}


