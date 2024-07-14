import { useRef } from "react";

class TCreator<T extends any, G extends any> {
  constructor(private testType: new (init: G) => T, private init?: G) {}

  createT(): T {
    return new this.testType(this.init);
  }
}

function useClass<T extends any, G extends any = any>(func: new (any: G) => T, init?: G) {
  const ref = useRef<T>();
  if (!ref.current) {
    var creator = new TCreator<T, G>(func, init);
    ref.current = creator.createT();
  }
  return ref.current;
}

export default useClass;
