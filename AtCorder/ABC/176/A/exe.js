// inputに入力データ全体が入る
function Main(input) {
  let [n, x, t] = input.split(" ").map((x) => parseInt(x));
  console.log(Math.ceil(n / x) * t);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
