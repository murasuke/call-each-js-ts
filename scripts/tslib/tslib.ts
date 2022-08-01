// JavaScriptからTypeScriptを呼び出すサンプル(呼び出される側)

// tsから呼び出すためにexport
export function tsAddFunc(lhv: number, rhv: number): number {
  const result = lhv + rhv;
  return result;
}

// jsから呼び出すため、関数をglobalにするためwindowのプロパティーにセット
// (型エラー回避のためanyに変換してセット)
(window as any)["tsAddFunc"] = tsAddFunc;
