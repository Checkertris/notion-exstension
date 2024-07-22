import { addMethod, Schema, mixed } from "yup";
import { IsEqual as IsEqual, getEnumKeyStrings, isEqual } from "~/utils";
const _ = require("lodash");

export const unique = addMethod(Schema, "unique", function (message: string, key?: string) {
  return this.test("unique", message, function (value) {
    if (!value || (!!key && !value[key])) return true;
    if (key) var validate = (target) => target[key] === value[key];
    else validate = (target) => _.isEqual(target, value);
    var options = Object.values(this.parent);
    if (options.filter(validate).length > 1) {
      throw this.createError({ path: this.path, message });
    }
    return true;
  });
});

// declare module "yup" {
//   interface Schema {
//     unique(message: string, key?: string): Schema;
//   }
// }

export const yupCustom = <T,>() => mixed<T>(isEqual);

export function yupEnumKeys(enumme) {
  return mixed<string>((value): value is string => !!getEnumKeyStrings(enumme).find((key) => key == value));
}
