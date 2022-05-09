// JavaScriptで定義したglobalな関数を、TypeScript側で認識させるため
// global.d.tsファイルを用意し、型宣言(declare)を行う
//   ⇒TypeScript側でグローバルな関数として認識され、コンパイルできるようになる

declare function addjs(lhv: number, rhv: number): number;
