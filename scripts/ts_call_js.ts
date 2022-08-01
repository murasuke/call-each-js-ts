export function ts_call_js(e: MouseEvent) {
  console.log("ts_call_js");
  console.log("jsAddFunc(5,6):", jsAddFunc(5, 6));
}

// js、htmlのonclickから直接呼び出せるようにするため、グローバルにする
(window as any)["ts_call_js"] = ts_call_js;
