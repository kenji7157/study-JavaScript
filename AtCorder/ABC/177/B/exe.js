// inputに入力データ全体が入る
function Main(input) {
  let [s, t] = input.split("\n").map((x) => x.trim());
  let max = 0;
  // S-Tの長さ分だけ一回目のループを回す
  for (let i = 0; i <= s.length - t.length; i++) {
    let c = 0;
    // Tの文字に対してい１文字ずつ等しいか確認する
    for (let j = 0; j < t.length; j++) {
      // 等しければカウントアップする
      if (s[i + j] === t[j]) {
        c++;
      }
    }
    // カウントアップの最大値を取得する
    max = Math.max(c, max);
  }
  console.log(t.length - max);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
