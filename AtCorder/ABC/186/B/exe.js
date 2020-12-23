// inputに入力データ全体が入る
function Main(input) {
	input = input.trim().split("\n")
	var h = input[0].split(" ")[0]
	var w = input[0].split(" ")[1]
	var a = [];
	for (i=0 ;i<h; i++){
		for (j=0 ;j<w; j++){
			a.push(parseInt(input[i+1].split(" ")[j]));
		}
	}
	var min_val = Math.min(...a);

	var c = 0;
	a.forEach((val) => {
		// console.log(val);
		c = val >= min_val ? c + val - min_val : c;
		// console.log(c);
	})
	console.log(c);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require('fs').readFileSync('./sample.txt', 'utf8'))
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));