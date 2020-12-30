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

### 配列の合計値
```js
let sum = list.reduce((a, b) => {
      return a + b;
    })
```

### 特定文字の数え上げ
- String オブジェクトの match() メソッドは、マッチした文字列を配列で返す
  -  引数は正規表現で指定する
```js
var ex = /text/g
var arr = str.match(ex);
```

### varとletの違い
- var：関数スコープのため、関数内で値を更新すると書き換わる
```js
function f() {
  var x = 1;
  {
    var x = 2;
  }
  // x = 2
  console.log(x);
}
```

- let:ブロックスコープのため、ブロックごとに変数管理できる
  - ES6から仕様に追加された
```js
function f() {
  let x = 1;
  {
    let x = 2;
  }
  // x = 1
  console.log(x);
}
```

以上より、letを使った方がバグは起こりづらいので、letが推奨されている。


### 等差数列の和
```js
let Sn = n * ( a[初項] + l[末項] )/ 2
```

### Mathモジュールの利用
- 絶対値の取得
  - Math.abs([number])
- 平方根の取得
  - Math.sqrt([number])

### String.prototype.trim()
- trim() メソッドは、文字列の両端の空白を削除する
  - 数値のときはparseIntで空白削除を考慮するが、文字列の場合はtrimを意識しないと誤爆する