// inputに入力データ全体が入る
function Main(input) {
  let [d, t, s] = input.split(" ").map((x) => parseInt(x));
  console.log(d / s <= t ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
