import { useRef, useState } from "react";
import { reduceObject } from "~/utils";

export function useRecord<K extends PropertyKey, V>(defaultValue: Record<K, V> = {} as Record<K, V>) {
  const [state, setState] = useState<Record<K, V>>(defaultValue);

  function set(key, value) {
    setState({ ...state, [key]: value });
  }

  function iterateSet(func: (key, value) => V) {
    var newState = reduceObject(state, { value: ([key, value]: [K, V]) => func(key, value) });
    setState(newState);
  }

  function iterate(func: (key, value) => any) {
    Object.entries(state).forEach(([key, value]) => {
      func(key, value);
    });
  }

  return { iterate, value: state, iterateSet, set };
}
