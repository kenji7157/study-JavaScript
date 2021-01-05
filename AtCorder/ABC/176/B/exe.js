// inputに入力データ全体が入る
function Main(input) {
  let n = input.split(" ").map((x) => BigInt(x))[0];
  console.log(n % BigInt(9) === BigInt(0) ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
