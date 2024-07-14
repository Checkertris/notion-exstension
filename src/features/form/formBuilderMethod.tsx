import { FormSchema } from "./iForm";
import FormBuilder from "./formBuilder";

export default function form<S extends FormSchema>(schema: S) {
  return new FormBuilder(schema);
}
