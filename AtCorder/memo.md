## JavaScriptメモ

### NumberとparseIntの違い
- Number：数値文字列をnumber型に変換する(小数も可能)
- parseInt：文字列から整数部分の数値部分を取り出しnumber型に変換する(小数は不可)

### 配列から最小値を抽出
- スプレット構文
- Mathモジュールを用いる

```js
/// listは配列
var min_val = Math.min(...list);
```

###　配列の分割代入
```js
// aに10,bに20が代入される
let [a, b] = [10, 20];
```

### 特定文字の数え上げ
- String オブジェクトの match() メソッドは、マッチした文字列を配列で返す
  -  引数は正規表現で指定する
```js
var ex = /text/g
var arr = str.match(ex);
```