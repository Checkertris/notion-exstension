
export interface Comparison<T> {
    config: string
    preset: T
    current: T
}

export abstract class AnyConfigTool<TNew, T extends TNew = TNew> {
    abstract extract(data): T
    abstract format(config: TNew): any
}

export abstract class ConfigTool<TNew, T extends TNew> extends AnyConfigTool<TNew, T> {
    abstract extract(data): T
    abstract format(config: TNew): any
    abstract create(...args): TNew
    abstract compareNew(preset: T, current: TNew): true | Comparison<any>
    abstract compareUpdate(preset: T, current: T): true | Comparison<any>
}

export abstract class SimpleConfigTool<T> extends ConfigTool<T, T> {
    abstract compare(preset: T, current: T): true | Comparison<any>
    compareNew = this.compare
    compareUpdate = this.compare
}

export abstract class StaticConfigTool<T> extends AnyConfigTool<T> {
    abstract extract(data): T
    format = () => ({})
}

export class NullConfigTool extends AnyConfigTool<{}> {
    extract = (data) => ({})
    format = () => ({})
}

