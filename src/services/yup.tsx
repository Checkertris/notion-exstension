import { AnyObject, mixed } from "yup";
import { isExtends } from "~/features/utils";

export const yupCustom = <T extends {}>() => mixed<T>(isExtends);

export function yupEnumKeys(enumme: AnyObject) {
    return mixed<keyof typeof enumme>((value): value is keyof typeof enumme => !!enumme[value]);
}
