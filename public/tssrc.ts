//
import { addts } from "./tslib/tslib.js";

export function ts_call_js(e: MouseEvent) {
  console.log("tsClickHandler");
  console.log("addjs(5,6):", addjs(5, 6));
}

export const ts_call_ts = (e: MouseEvent) => {
  console.log("tsClickHandler");
  console.log("addjs(7,8):", addts(7, 8));
};

// js、htmlのonclickから直接呼び出せるようにするため、グローバルにする
(window as any)["ts_call_js"] = ts_call_js;
(window as any)["ts_call_ts"] = ts_call_ts;
