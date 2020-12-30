// inputに入力データ全体が入る
function Main(input) {
  // 入力値の後に空白が挿入されている場合もあるのでtrimして処理すべき
  // let S = input;
  let S = input.trim().split("\n")[0].split(" ")[0];
  let ans;
  if (S.slice(-1) === "s") {
    ans = S + "es";
  } else {
    ans = S + "s";
  }
  console.log(ans);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
