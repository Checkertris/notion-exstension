import { useState } from "react";

function useArray<T extends any>(defaultValue?: T[]) {
  const [array, setArray] = useState(defaultValue ? defaultValue : ([] as T[]));

  function push(element) {
    setArray((a) => [...a, element]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update(index, newElement) {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
  }

  function remove(index) {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  }

  function clear() {
    setArray([]);
  }

  return { set: update, default: { value: array, replace: setArray, push, filter, remove, clear } };
}
