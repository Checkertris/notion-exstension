import { mixed, ObjectSchema } from "yup";
import { isExtends } from "~/utils";

export const yupCustom = <T,>() => mixed<T>(isExtends);

export function yupEnumKeys(enumme) {
  return mixed<string>((value): value is string => !!enumme[value]);
}

export function isNewSchema<T extends ObjectSchema<{ isNew: boolean }>, N extends ObjectSchema<any>, O extends ObjectSchema<any>>(base: T, newSchema: N, oldSchema: O) {
  return base.concat(newSchema).concat(oldSchema).when(["isNew"], ([isNew]: [boolean]) => {
    if (isNew) return base.concat(newSchema)
    return base.concat(oldSchema)
  });
}
