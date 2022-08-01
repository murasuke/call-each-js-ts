# JSからTS、TSからJSを相互で呼び出すサンプル

* 元々JavaScriptで作成されたクライアントアプリに、TypeScriptを組み込み相互に呼び出す状況を想定
* JavaScriptはモジュールを利用しない(グローバルな関数のみ)
* TypeScriptはモジュール(ESモジュール)でコンパイル
* webpackは使用せず、&lt;script&gt;タグで読み込む


## jsからTypeScriptを呼び出す

