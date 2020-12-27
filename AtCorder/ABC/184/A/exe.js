// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  // 入力値から最小値を抽出
  let [a, b] = input[0].split(" ").map((x) => parseInt(x));
  let [c, d] = input[1].split(" ").map((x) => parseInt(x));
  console.log(a * d - b * c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
