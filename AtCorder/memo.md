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