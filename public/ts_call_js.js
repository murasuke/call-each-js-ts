export function ts_call_js(e) {
    console.log("ts_call_js");
    console.log("jsAddFunc(5,6):", jsAddFunc(5, 6));
}
// js、htmlのonclickから直接呼び出せるようにするため、グローバルにする
window["ts_call_js"] = ts_call_js;
