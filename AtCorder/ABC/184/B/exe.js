// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  // 入力値から最小値を抽出
  let [n, x] = input[0].split(" ").map((x) => parseInt(x));
  let result = input[1];
  // console.log(answer.match(/o/g).length);
  let point = x;
  // 順番が関係しているためループで加算していく方式を採用
  for (let i = 0; i < result.length; i++) {
    if (result[i] === "o") {
      point = point + 1;
    } else {
      point = point - 1 < 0 ? 0 : point - 1;
    }
  }
  let score = point;
  console.log(score);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
