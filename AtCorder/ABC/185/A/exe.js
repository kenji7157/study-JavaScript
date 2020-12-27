// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ").map((x) => parseInt(x));
  // 入力値から最小値を抽出
  console.log(Math.min(...input));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./sample.txt", "utf8"));
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));
