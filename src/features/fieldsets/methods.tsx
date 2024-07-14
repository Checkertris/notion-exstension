import { FormListBuilders, FormListValues } from "../formList";
import { PathByType } from "~/utils";

import { Checkbox, Select, TextArea, Text } from "./fieldsetItem/defaultFieldsetItem/input/IntputItemVariants";
import { OutputItemBuilder } from "./fieldsetItem/defaultFieldsetItem/outputItemBuilder";
import { CustomItemBuilder } from "./fieldsetItem/defaultFieldsetItem/customItemBuilder";
import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { FieldsetBuilder } from "./fieldsetBuilder";

export function output(output: JSX.Element) {
  return new OutputItemBuilder(output);
}

export function custom(child: JSX.Element) {
  return new CustomItemBuilder(child);
}

export function checkbox<T extends FormListBuilders, K extends keyof T, V>(form: K, path: PathByType<FormListValues<T>[K], V>, text: string) {
  return new Checkbox(form, path, text);
}

export function select<T extends FormListBuilders, K extends keyof T, V>(form: K, path: PathByType<FormListValues<T>[K], V>) {
  return new Select(form, path);
}
export function text<T extends FormListBuilders, K extends keyof T, V>(form: K, path: PathByType<FormListValues<T>[K], V>) {
  return new Text(form, path);
}
export function textarea<T extends FormListBuilders, K extends keyof T, V>(form: K, path: PathByType<FormListValues<T>[K], V>) {
  return new TextArea(form, path);
}

export function fieldset() {
  return new FieldsetBuilder();
}

export function fieldsetRow() {
  return new FieldsetRowBuilder();
}

export function fieldsetPage() {
  return new FieldsetPageBuilder();
}
