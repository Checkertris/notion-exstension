import { useRef } from "react";
import { isExtends, reduceObject } from "~/utils";
import { FormValues, UseFormReturn } from "../form";
import { useContextList } from "~/hooks";
import { AnyFormBuilder, UseFormListReturn } from "./iFormList";

export default function useFormList<T extends Record<string, AnyFormBuilder>>(input: UseFormListReturn<T>) {
  const forms = useRef(input).current;
  const [contextWrapper, contextList] = useContextList(forms);

  function trySubmitAll() {
    var results = reduceObject(forms, {
      value: ([key, form]: [string, UseFormReturn]) => form.handleSubmit(),
    });
    if (isExtends<Record<string, FormValues<any>>>(results)) return results;
    else return null;
  }

  function triggerAll() {
    Object.values(forms).forEach((form) => form.trigger());
  }

  return { contextList, contextWrapper, triggerAll, trySubmitAll };
}
