import { FieldsetPageBuilder } from "./fieldsetPageBuilder";
import { FieldsetRowBuilder } from "./fieldsetRowBuilder";
import { FieldsetBuilder } from "./fieldsetBuilder";
import { FieldsetItemBuilder } from "./fieldsetItemBuilder";

export function fieldsetPage() {
  return new FieldsetPageBuilder();
}
export function fieldset() {
  return new FieldsetBuilder();
}

export function fieldsetRow() {
  return new FieldsetRowBuilder();
}

export function fieldsetItem() {
  return new FieldsetItemBuilder();
}
