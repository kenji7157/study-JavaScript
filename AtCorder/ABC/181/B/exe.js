// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0]);
  let c = 0;
  for (let i = 1; i < n + 1; i++) {
    let [a, b] = input[i].split(" ").map((x) => parseInt(x));
    let n = b - a + 1;
    c = c + (n * (a + b)) / 2;
  }
  console.log(c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
