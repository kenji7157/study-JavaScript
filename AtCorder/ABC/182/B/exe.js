// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let n = parseInt(input[0]);
  let a = input[1].split(" ").map((x) => parseInt(x));
  // console.log(n);
  let result = 0;
  let answer = 0;
  for (let i = 2; i <= 1000; i++) {
    let c = 0;
    for (let j = 0; j < n; j++) {
      if (a[j] % i === 0) {
        c = c + 1;
      }
    }
    if (result < c) {
      result = c;
      answer = i;
    }
  }
  console.log(answer);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
