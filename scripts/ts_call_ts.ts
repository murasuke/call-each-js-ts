import { tsAddFunc } from "./tslib/tslib.js";

export const ts_call_ts = (e: MouseEvent) => {
  console.log("ts_call_ts");
  console.log("tsAddFunc(7,8):", tsAddFunc(7, 8));
};

// js、htmlのonclickから直接呼び出せるようにするため、グローバルにする
(window as any)["ts_call_ts"] = ts_call_ts;
