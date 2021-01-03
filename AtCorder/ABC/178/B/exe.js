// inputに入力データ全体が入る
function Main(input) {
  /* global BigInt */
  let [a, b, c, d] = input.split(" ").map((x) => BigInt(x));
  let result = [];
  result.push(a * c);
  result.push(a * d);
  result.push(b * c);
  result.push(b * d);
  console.log(result);
  let ans = result.reduce((a, b) => {
    return a > b ? a : b;
  });
  console.log(ans.toString());
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
