import { getFromPath, Path } from "./typeUtils";

export function setFromPath<T>(obj: T, path: Path<T>, value) {
    const pathParts = path.split('.');
    let newObj = obj;

    pathParts.forEach((part, index) => {
        if (newObj[part]) {
            if (index < pathParts.length - 1) {
                newObj = newObj[part];
            } else {
                newObj[part] = value;
            }
        }
    });

    return newObj
};

export function swapEnumToStringObj<T>(obj: T, map: Record<Path<T>, object>) {
    return Object.entries(map).reduce((prev, [path, enumme]: [Path<T>, any]) => {
        return setFromPath(prev, path, enumme[getFromPath(obj, path)])
    }, obj)
}
