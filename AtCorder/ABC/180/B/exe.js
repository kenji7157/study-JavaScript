// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  let xList = input[1].split(" ").map((x) => Math.abs(parseInt(x)));

  console.log(
    xList.reduce((a, b) => {
      return a + b;
    })
  );
  let xList2 = input[1].split(" ").map((x) => parseInt(x) * parseInt(x));
  console.log(
    Math.sqrt(
      xList2.reduce((a, b) => {
        return a + b;
      })
    )
  );
  console.log(Math.max(...xList));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("./dev/stdin", "utf8"));
