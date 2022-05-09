// jsからjsの関数を呼び出す
//  ⇒対象のjsファイルが<script>タグで読み込まれていれば呼び出し可能
function js_call_js(e) {
  console.log("js_call_js");
  console.log("addts(1,2):", addjs(1, 2));
}

const js_call_ts = (e) => {
  console.log("js_call_ts");
  console.log("addts(3,4):", addts(3, 4));
};
