// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ").map((x) => parseInt(x));
  let [a, b] = input;
  let max = 2 * a + 100;
  console.log(max - b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
