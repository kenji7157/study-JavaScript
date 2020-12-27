// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ").map((x) => parseInt(x));
  let [sx, sy, gx, gy] = input;
  // 求める点のx座標をxとした時の各点の傾きにおいて以下が成り立つ
  // - sy / (x - sx) = - gy / (gx - x)
  // これをxについて解くと以下の式が求まる
  let x = (sx * gy + sy * gx) / (sy + gy);
  console.log(x);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
