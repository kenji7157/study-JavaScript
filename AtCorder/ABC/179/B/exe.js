// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let N = parseInt(input[0]);
  let c = 0;
  for (let i = 0; i < N; i++) {
    let [a, b] = input[i + 1].split(" ").map((x) => parseInt(x));
    c = a === b ? c + 1 : 0;
    if (c >= 3) {
      console.log("Yes");
      return;
    }
  }
  console.log("No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
